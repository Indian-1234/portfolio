"use client";
import { SectionWrapper } from "@/app/components/HigherOrderComponents";
import { education } from "@/app/constants";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";

const Education = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">Background</p>
				<h2 className="sectionHeadText">Education.</h2>
			</motion.div>

			<div className="mt-14 flex flex-col gap-6">
				{education.map((item, index) => (
					<motion.div
						key={item.title}
						variants={fadeIn("up", "spring", index * 0.2, 0.75)}
						className="green-pink-gradient p-px rounded-[20px] shadow-card"
					>
						<div className="bg-tertiary rounded-[20px] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
							<div className="flex-1">
								<h3 className="text-white text-[20px] sm:text-[22px] font-bold leading-snug">
									{item.title}
								</h3>
								<p className="text-secondary text-[16px] font-semibold mt-1">
									{item.institution}
								</p>
								<p className="text-white-100 text-[14px] mt-3 tracking-wider">
									{item.detail}
								</p>
							</div>
							<p className="text-secondary text-[14px] font-medium whitespace-nowrap sm:pt-1">
								{item.date}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Education, "education");
