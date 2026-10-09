"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { testimonials } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type FeedbackCardProps = {
	index: number;
	testimonial: string;
	name: string;
	link: string;
	image: string;
};

const FeedbackCard = ({
	index,
	testimonial,
	name,
	link,
	image,
}: FeedbackCardProps) => (
	<motion.div
		variants={fadeIn("", "spring", index * 0.5, 0.75)}
		className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
	>
		<p className="text-white font-black text-[48px]">&quot;</p>

		<div className="mt-1 ">
			<p className="text-white tracking-wider text-[18px]">{testimonial}</p>
			<div className="mt-7 flex justify-between items-center gap-1">
				<div className="flex-1 min-w-0 flex flex-col">
					<p className="text-white font-medium text-[16px] break-all">
						<span className="blue-text-gradient">@</span>
						{name}
					</p>
				</div>
				<Link
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`Open ${name}`}
					className="flex shrink-0 items-center justify-center w-11 h-11"
				>
					<Image
						src={image}
						width={40}
						height={40}
						alt={`${name} profile link`}
						className="w-11 h-11 rounded-full object-cover"
					/>
				</Link>
			</div>
		</div>
	</motion.div>
);

const Feedbacks = () => {
	return (
		<div className="mt-12 bg-black-100 rounded-[20px]">
			<div className="padding bg-tertiary rounded-2xl min-h-[300px]">
				<motion.div variants={textVariant()}>
					<h2 className="sectionHeadText">Social Profiles</h2>
					<p className="sectionSubText">
						Find me online
					</p>
				</motion.div>
			</div>
			<div className="paddingX -mt-20 pb-14 flex flex-wrap gap-7">
				{testimonials.map((testimonial, index) => (
					<FeedbackCard key={testimonial.id} index={index} {...testimonial} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Feedbacks, "");
