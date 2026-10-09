"use client";
import React from "react";

/**
 * Animated "Sensors -> MQTT Broker -> Backend -> Time-Series DB -> Dashboard"
 * pipeline. Pure inline SVG + CSS so it stays light on mobile (no 3D canvas).
 *
 * Renders horizontally on tablet+ and vertically on phones, so the node labels
 * stay readable instead of being scaled down to ~7px. Every animation is
 * disabled under prefers-reduced-motion (see globals.css).
 */

const NODES = [
	{ id: "sensors", label: "Sensors", icon: "sensor" },
	{ id: "broker", label: "MQTT Broker", icon: "broker" },
	{ id: "backend", label: "Backend", icon: "backend" },
	{ id: "tsdb", label: "Time-Series DB", icon: "db" },
	{ id: "dashboard", label: "Dashboard", icon: "dashboard" },
] as const;

type IconKind = (typeof NODES)[number]["icon"];

const NodeIcon = ({ kind }: { kind: IconKind }) => {
	switch (kind) {
		case "sensor":
			return (
				<>
					<circle cx="0" cy="2" r="4" fill="currentColor" />
					<path d="M-7 -3a9 9 0 0 1 14 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
					<path d="M-11 -7a14 14 0 0 1 22 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.55" />
				</>
			);
		case "broker":
			return (
				<>
					<rect x="-10" y="-9" width="20" height="18" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
					<path d="M-5 -3h10M-5 1h10M-5 5h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
				</>
			);
		case "backend":
			return (
				<>
					<rect x="-10" y="-10" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
					<path d="M-4 -4l-3 4 3 4M4 -4l3 4-3 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
				</>
			);
		case "db":
			return (
				<>
					<ellipse cx="0" cy="-7" rx="10" ry="4" stroke="currentColor" strokeWidth="2" fill="none" />
					<path d="M-10 -7v14c0 2.2 4.5 4 10 4s10-1.8 10-4V-7" stroke="currentColor" strokeWidth="2" fill="none" />
					<path d="M-10 0c0 2.2 4.5 4 10 4s10-1.8 10-4" stroke="currentColor" strokeWidth="2" fill="none" />
				</>
			);
		case "dashboard":
			return (
				<>
					<rect x="-11" y="-9" width="22" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
					<path d="M-6 3v-5M-1 3v-9M4 3v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
				</>
			);
	}
};

const Defs = ({ idPrefix }: { idPrefix: string }) => (
	<defs>
		<linearGradient id={`${idPrefix}-line`} x1="0" y1="0" x2="1" y2="0">
			<stop offset="0%" stopColor="#915EFF" stopOpacity="0.25" />
			<stop offset="50%" stopColor="#49BBFF" stopOpacity="0.55" />
			<stop offset="100%" stopColor="#915EFF" stopOpacity="0.25" />
		</linearGradient>
		<filter id={`${idPrefix}-glow`} x="-70%" y="-70%" width="240%" height="240%">
			<feGaussianBlur stdDeviation="3.2" result="b" />
			<feMerge>
				<feMergeNode in="b" />
				<feMergeNode in="SourceGraphic" />
			</feMerge>
		</filter>
	</defs>
);

const DIAGRAM_LABEL =
	"Industrial IoT data pipeline: sensors send data to an MQTT broker, then to the backend, into a time-series database, and finally to a real-time dashboard.";

/** Horizontal chain, used from the md breakpoint up. */
const Horizontal = () => {
	const step = 120;
	const startX = 70;
	const y = 150;

	return (
		<svg viewBox="0 0 620 300" className="w-full h-auto" role="img" aria-label={DIAGRAM_LABEL}>
			<Defs idPrefix="ph" />
			<line
				x1={startX}
				y1={y}
				x2={startX + step * 4}
				y2={y}
				stroke="url(#ph-line)"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>
			{[0, 1, 2, 3].map((seg) => (
				<circle key={`h-dot-${seg}`} className="pipe-dot" r="4.5" fill="#49BBFF" filter="url(#ph-glow)" cy={y}>
					<animate
						attributeName="cx"
						from={startX + step * seg}
						to={startX + step * (seg + 1)}
						dur="1.8s"
						begin={`${seg * 0.45}s`}
						repeatCount="indefinite"
					/>
				</circle>
			))}
			{NODES.map((node, i) => {
				const cx = startX + step * i;
				return (
					<g key={node.id} className="pipe-node" style={{ animationDelay: `${i * 0.2}s` }}>
						<circle cx={cx} cy={y} r="30" fill="#1d1836" stroke="#915EFF" strokeWidth="2" strokeOpacity="0.75" />
						<circle cx={cx} cy={y} r="30" fill="none" stroke="#49BBFF" strokeWidth="1" strokeOpacity="0.25" className="pipe-halo" />
						<g transform={`translate(${cx} ${y})`} color="#aaa6c3">
							<NodeIcon kind={node.icon} />
						</g>
						<text x={cx} y={y + 56} textAnchor="middle" fill="#dfd9ff" fontSize="14" fontWeight="500">
							{node.label}
						</text>
					</g>
				);
			})}
		</svg>
	);
};

/** Vertical chain for phones, so labels stay legible. */
const Vertical = () => {
	const step = 86;
	const startY = 48;
	const x = 52;

	return (
		<svg viewBox="0 0 300 440" className="w-full h-auto max-h-[38vh]" role="img" aria-label={DIAGRAM_LABEL}>
			<Defs idPrefix="pv" />
			<line
				x1={x}
				y1={startY}
				x2={x}
				y2={startY + step * 4}
				stroke="url(#pv-line)"
				strokeWidth="2.5"
				strokeLinecap="round"
			/>
			{[0, 1, 2, 3].map((seg) => (
				<circle key={`v-dot-${seg}`} className="pipe-dot" r="4.5" fill="#49BBFF" filter="url(#pv-glow)" cx={x}>
					<animate
						attributeName="cy"
						from={startY + step * seg}
						to={startY + step * (seg + 1)}
						dur="1.8s"
						begin={`${seg * 0.45}s`}
						repeatCount="indefinite"
					/>
				</circle>
			))}
			{NODES.map((node, i) => {
				const cy = startY + step * i;
				return (
					<g key={node.id} className="pipe-node" style={{ animationDelay: `${i * 0.2}s` }}>
						<circle cx={x} cy={cy} r="26" fill="#1d1836" stroke="#915EFF" strokeWidth="2" strokeOpacity="0.75" />
						<circle cx={x} cy={cy} r="26" fill="none" stroke="#49BBFF" strokeWidth="1" strokeOpacity="0.25" className="pipe-halo" />
						<g transform={`translate(${x} ${cy}) scale(0.85)`} color="#aaa6c3">
							<NodeIcon kind={node.icon} />
						</g>
						<text x={x + 42} y={cy + 6} fill="#dfd9ff" fontSize="19" fontWeight="500">
							{node.label}
						</text>
					</g>
				);
			})}
		</svg>
	);
};

const IoTPipeline = () => (
	<div className="iot-pipeline w-full max-w-[620px] min-w-0">
		<div className="hidden md:block">
			<Horizontal />
		</div>
		<div className="md:hidden">
			<Vertical />
		</div>
	</div>
);

export default IoTPipeline;
