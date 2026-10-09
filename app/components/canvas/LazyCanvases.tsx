"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import CanvasBoundary from "./CanvasBoundary";

/**
 * Heavy three.js canvases are code-split and only mounted in the browser,
 * so they never block first paint. They are also skipped entirely on small
 * screens and when the visitor prefers reduced motion.
 */

const EarthCanvasImpl = dynamic(() => import("./Earth"), { ssr: false });
const StarsCanvasImpl = dynamic(() => import("./Stars"), { ssr: false });

/** True on tablet+ with motion allowed. */
const useRichMotion = () => {
	const [ok, setOk] = useState(false);

	useEffect(() => {
		const wide = window.matchMedia("(min-width: 768px)");
		const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => setOk(wide.matches && !calm.matches);

		update();
		wide.addEventListener("change", update);
		calm.addEventListener("change", update);
		return () => {
			wide.removeEventListener("change", update);
			calm.removeEventListener("change", update);
		};
	}, []);

	return ok;
};

export const LazyEarthCanvas = () => {
	const rich = useRichMotion();
	if (!rich) return null;
	return (
		<CanvasBoundary>
			<EarthCanvasImpl />
		</CanvasBoundary>
	);
};

export const LazyStarsCanvas = () => {
	const rich = useRichMotion();
	if (!rich) return null;
	return (
		<CanvasBoundary>
			<StarsCanvasImpl />
		</CanvasBoundary>
	);
};
