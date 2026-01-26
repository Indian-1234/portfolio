"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto flex flex-col justify-center">
			<div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 px-6 pt-24 h-full">

				{/* Text Content */}
				<div className="flex flex-row items-start gap-5 z-10 w-full lg:w-1/2 pt-10">
					<div className="flex flex-col justify-center items-center mt-5">
						<div className="w-5 h-5 rounded-full bg-[#915EFF]" />
						<div className="w-1 sm:h-80 h-40 violet-gradient" />
					</div>
					<div>
						<h1 className="heroHeadText text-white">
							Hi, I&apos;m <span className="text-[#915EFF]">Indian M</span>
						</h1>
						<p className="heroSubText mt-2 text-white-100">
							Full Stack & IoT Engineer
						</p>
						<p className="mt-4 text-secondary text-[16px] max-w-md leading-relaxed">
							Building systems that connect the physical world to the digital — from real-time IoT platforms to scalable web applications.
						</p>
					</div>
				</div>

				{/* Image Content */}
				<div className="relative w-full lg:w-1/2 h-auto flex items-center justify-center z-0">
					<div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] animate-float">
						{/* Ambient Glow */}
						<div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full opacity-30 blur-2xl animate-pulse" />

						{/* Image Card */}
						<div className="relative w-full h-full rounded-[30px] overflow-hidden border-2 border-white/10 shadow-[0_0_50px_-10px_rgba(145,94,255,0.3)] bg-tertiary">
							<Image
								src="/desktop_pc/hero-main.jpg"
								alt="Developer Setup"
								fill
								priority
								className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
							/>
							{/* Glossy Overlay */}
							<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
						</div>
					</div>
				</div>
			</div>

			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Number.POSITIVE_INFINITY,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
