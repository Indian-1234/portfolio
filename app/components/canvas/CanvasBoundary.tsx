"use client";
import React from "react";

type Props = { children: React.ReactNode };
type State = { failed: boolean };

/**
 * three.js throws if the browser cannot give it a WebGL context (older
 * devices, blocked hardware acceleration, some in-app browsers). Without a
 * boundary that exception unmounts the whole React tree and the visitor gets
 * a blank page, so decorative canvases are isolated behind this.
 */
class CanvasBoundary extends React.Component<Props, State> {
	state: State = { failed: false };

	static getDerivedStateFromError(): State {
		return { failed: true };
	}

	componentDidCatch(error: unknown) {
		console.warn("3D canvas disabled:", error);
	}

	render() {
		if (this.state.failed) return null;
		return this.props.children;
	}
}

export default CanvasBoundary;
