"use client";
import { motion } from "framer-motion";
import React from "react";
import IoTPipeline from "./IoTPipeline";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto flex flex-col justify-center">
			<div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-10 px-6 pt-24 pb-36 lg:pb-0 h-full">

				{/* Text Content */}
				<div className="flex flex-row items-start gap-5 z-10 w-full lg:w-1/2 pt-10 min-w-0">
					<div className="flex flex-col justify-center items-center mt-5">
						<div className="w-5 h-5 rounded-full bg-[#915EFF]" />
						<div className="w-1 sm:h-80 h-40 violet-gradient" />
					</div>
					<div className="min-w-0 flex-1">
						<h1 className="heroHeadText text-white">
							Hi, I&apos;m <br />
							<span className="text-[#915EFF] break-words">Indian Manokaran</span>
						</h1>
						<p className="heroSubText mt-2 text-white-100">
							Industrial IoT Software Engineer
						</p>
						<p className="mt-4 text-secondary text-[16px] max-w-md leading-relaxed">
							Building systems that connect the physical world to the digital — from real-time IoT platforms to scalable web applications.
						</p>
					</div>
				</div>

				{/* Pipeline diagram */}
				<div className="relative w-full lg:w-1/2 h-auto flex items-center justify-center z-0">
					<div className="relative w-full flex items-center justify-center animate-float">
						{/* Ambient Glow */}
						<div className="absolute inset-x-6 inset-y-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full opacity-20 blur-3xl" />
						<IoTPipeline />
					</div>
				</div>
			</div>

			<div className="absolute bottom-6 xs:bottom-10 w-full flex justify-center items-center z-20">
				<a href="#about" aria-label="Scroll to About section" className="flex items-center justify-center w-11 h-[72px]">
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
