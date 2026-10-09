"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type ProjectCardProps = {
	index: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link?: string;
	platform: "Netlify" | "IoT Web Application" | "Vercel" | "Figma" | "Wordpress" | "Web" | "Full Stack Web" | "Mobile" | "Desktop" | "AI Integration" | "Web Application" | "Mobile & Web App";
};

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	deploy_link,
	platform
}: ProjectCardProps) => {
	return (
		<motion.div
			variants={fadeIn("up", "spring", index * 0.1, 0.5)}
			className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-lg hover:shadow-2xl transition-all duration-300"
		>
			<div className="relative w-full h-[230px]">
				<Image
					src={image}
					width={1000}
					height={1000}
					alt={`${name} project screenshot`}
					className="w-full h-full object-cover rounded-2xl"
				/>

				<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
					{source_code_link && (
						<Link
							href={source_code_link}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${name} source code on GitHub`}
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
						>
							<Image
								src="/tech/github.webp"
								width={24}
								height={24}
								alt=""
								className="object-contain"
							/>
						</Link>
					)}
					{deploy_link && (
						<Link
							href={deploy_link}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${name} live demo`}
							className="black-gradient w-10 h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
						>
							<Image
								src={platform === "Netlify" ? "/tech/netlify.webp" : platform === "Vercel" ? "/tech/vercel.svg" : platform === "Wordpress" ? "/tech/wordpress.webp" : platform === "Web" ? "/web.webp" : "/tech/figma.webp"}
								width={24}
								height={24}
								alt=""
								className="object-contain"
							/>
						</Link>
					)}
				</div>
			</div>

			<div className="mt-5">
				<h3 className="text-white font-bold text-[24px]">{name}</h3>
				<p className="mt-2 text-secondary text-[14px] leading-relaxed">{description}</p>
			</div>

			<div className="mt-4 flex flex-wrap gap-2">
				{tags.map((tag) => (
					<p
						key={`${name}-${tag.name}`}
						className={`text-[14px] ${tag.color}`}
					>
						#{tag.name}
					</p>
				))}
			</div>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">My work</p>
				<h2 className="sectionHeadText">Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					A selection of systems I&apos;ve designed and built — from real-time
					industrial IoT platforms to full stack business applications. Company
					projects are described at a high level to respect client
					confidentiality.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "work");
