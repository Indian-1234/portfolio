"use client";
import { technologies } from "@/app/constants";
import { SectionWrapper } from "./HigherOrderComponents";
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "@/app/utils/motion";

const Tech = () => {
	return (
		<>
			{/* Section Header */}
			<motion.div variants={textVariant()} className="mb-12">
				<p className="sectionSubText text-center">What I work with</p>
				<h2 className="sectionHeadText text-center">Skills & Technologies.</h2>
			</motion.div>

			{/* Tech Grid */}
			<div className="flex flex-row flex-wrap justify-center gap-8">
				{technologies.map((technology, index) => (
					<motion.div
						key={technology.name}
						variants={fadeIn("up", "spring", index * 0.1, 0.75)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.25 }}
						className="w-28 h-32 flex flex-col justify-center items-center gap-2 group cursor-pointer"
					>
						{/* Icon Card */}
						<motion.div
							className="relative w-20 h-20 bg-tertiary rounded-2xl flex justify-center items-center shadow-card border border-white/10 overflow-hidden"
							whileHover={{
								scale: 1.15,
								borderColor: "rgba(145, 94, 255, 0.5)",
								boxShadow: "0 0 25px rgba(145, 94, 255, 0.3)"
							}}
							transition={{ type: "spring", stiffness: 300 }}
						>
							{/* Gradient Overlay on Hover */}
							<div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />

							<div className="relative w-12 h-12 z-10">
								<Image
									src={technology.icon}
									alt={technology.name}
									fill
									className="object-contain filter drop-shadow-md"
								/>
							</div>
						</motion.div>

						{/* Tech Name */}
						<p className="text-white text-[13px] font-medium text-center opacity-70 group-hover:opacity-100 transition-all duration-300">
							{technology.name}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Tech, "tech");

