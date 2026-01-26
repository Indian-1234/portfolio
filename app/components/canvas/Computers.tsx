"use client";
import CanvasLoader from "@/app/components/Loader";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";

const Computers = ({ isMobile }: { isMobile: boolean }) => {
	const computer = useGLTF("/desktop_pc/scene.gltf");
	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<pointLight intensity={1} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.7 : 0.75}
				position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [showFallback, setShowFallback] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		// Check device type and performance
		const mediaQuery = window.matchMedia("(max-width: 768px)");
		const isLowPerformance = 
			// @ts-ignore - navigator.deviceMemory is not in all browsers
			(navigator.deviceMemory && navigator.deviceMemory < 4) ||
			(navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4);
		
		const isMobileDevice = mediaQuery.matches;
		setIsMobile(isMobileDevice);
		
		// Show fallback on mobile or low-performance devices
		if (isMobileDevice || isLowPerformance) {
			setShowFallback(true);
			setIsLoading(false);
		}

		const handleMediaQueryChange = (event: MediaQueryListEvent) => {
			setIsMobile(event.matches);
			if (event.matches) {
				setShowFallback(true);
			}
		};
		
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		// Set a timeout for loading - if it takes too long, show fallback
		const loadingTimeout = setTimeout(() => {
			if (isLoading) {
				setShowFallback(true);
				setIsLoading(false);
			}
		}, 8000); // 8 seconds timeout

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
			clearTimeout(loadingTimeout);
		};
	}, [isLoading]);

	// Preload the model on desktop
	useEffect(() => {
		if (!showFallback) {
			try {
				const timeout = setTimeout(() => {
					setIsLoading(false);
				}, 100);
				return () => clearTimeout(timeout);
			} catch (error) {
				console.error("Error loading 3D model:", error);
				setHasError(true);
				setShowFallback(true);
			}
		}
	}, [showFallback]);

	// Fallback for mobile and low-performance devices
	if (showFallback || hasError) {
		return (
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="relative w-full h-full max-w-2xl mx-auto flex items-center justify-center">
					<Image
						src="/desktop_pc/computer-fallback.png"
						alt="Desktop Computer Setup"
						width={600}
						height={600}
						priority
						className="object-contain opacity-80 animate-float"
						style={{ filter: 'drop-shadow(0 0 30px rgba(145, 94, 255, 0.3))' }}
						onError={() => {
							// If image also fails, show a styled placeholder
							setHasError(true);
						}}
					/>
				</div>
			</div>
		);
	}

	return (
		<Canvas
			frameloop="demand"
			dpr={[1, 1.5]} // Limit pixel ratio for performance
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ 
				preserveDrawingBuffer: true,
				antialias: false, // Disable antialiasing for better performance
			}}
			performance={{ min: 0.5 }} // Allow performance degradation
			onCreated={({ gl }) => {
				// Optimize renderer
				gl.setClearColor("#050816");
			}}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
					enablePan={false}
					enableDamping
					dampingFactor={0.05}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
