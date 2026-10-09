export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const DEVICON = "https://raw.githubusercontent.com/devicons/devicon/master/icons";

const services = [
	{
		title: "Industrial IoT & BMS",
		icon: "/creator.webp",
	},
	{
		title: "Full Stack Development",
		icon: "/web.webp",
	},
	{
		title: "Mobile Apps (Flutter)",
		icon: "/mobile.webp",
	},
	{
		title: "Cloud & DevOps",
		icon: "/backend.webp",
	},
];

const technologies = [
	{
		name: ".NET / C#",
		icon: "/tech/dotnet.webp",
	},
	{
		name: "Python",
		icon: "/tech/python.webp",
	},
	{
		name: "Next.js",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "React",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "Node.js",
		icon: "/tech/nodejs.webp",
	},
	{
		name: "Flutter",
		icon: "/tech/flutter.webp",
	},
	{
		name: "Spring Boot",
		icon: `${DEVICON}/spring/spring-original.svg`,
	},
	{
		name: "MQTT",
		icon: "/tech/mqtt.webp",
	},
	{
		name: "InfluxDB",
		icon: "/tech/influxdb.webp",
	},
	{
		name: "PostgreSQL",
		icon: `${DEVICON}/postgresql/postgresql-original.svg`,
	},
	{
		name: "SQL Server",
		icon: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-plain.svg`,
	},
	{
		name: "MongoDB",
		icon: `${DEVICON}/mongodb/mongodb-original.svg`,
	},
	{
		name: "WebSockets",
		icon: "/tech/websocket.svg",
	},
	{
		name: "Docker",
		icon: `${DEVICON}/docker/docker-original.svg`,
	},
	{
		name: "GitHub Actions",
		icon: `${DEVICON}/githubactions/githubactions-original.svg`,
	},
	{
		name: "Jenkins",
		icon: `${DEVICON}/jenkins/jenkins-original.svg`,
	},
	{
		name: "AWS",
		icon: "/tech/aws.svg",
	},
	{
		name: "Azure",
		icon: "/tech/azure.svg",
	},
	{
		name: "Bluetooth Low Energy",
		icon: "/tech/bluetooth.svg",
	},
];

const experiences = [
	{
		title: "Full Stack & IoT Platform Engineer",
		company_name: "Sustainabyte Technologies Pvt Ltd",
		icon: "/company/sustainabyte.png",
		iconBg: "#383E56",
		date: "Dec 2024 - Present",
		points: [
			"Led a team of 4 engineers (2 backend, 2 frontend): architecture decisions, task allocation, code reviews and delivery timelines.",
			"Re-architected a legacy Building Management System that suffered from data loss and downtime, redesigning the ingestion, service and storage layers for scalability.",
			"Built an MQTT ingestion pipeline handling 10,000+ messages per minute across 6 subsystems (HVAC, STP, WTP, UPS, lifts, battery), with buffering and backpressure to prevent telemetry loss.",
			"Designed a hybrid data layer: time-series telemetry in InfluxDB, configuration and relational data in SQL.",
			"Delivered real-time dashboards over WebSockets, plus alarm/threshold logic and automated reports in .NET and Python.",
			"Built a Bluetooth Low Energy mobile app to configure and control industrial welding machines, and a welding tracking and analytics platform (web + mobile).",
			"Set up CI/CD with GitHub Actions and Jenkins, deploying on AWS and Azure.",
		],
	},
	{
		title: "Freelance Full Stack Developer",
		company_name: "Self-employed",
		icon: "/logo.png",
		iconBg: "#1d1836",
		date: "2023 - 2024",
		points: [
			"Built the TRB/TNPSC exam management platform solo: web portal and Flutter mobile app, shipped to production.",
		],
	},
	{
		title: "Software Engineer - Full Stack",
		company_name: "Xentrix High-Tech Private Limited",
		icon: "/company/xentrix.png",
		iconBg: "#E6DEDD",
		date: "Nov 2023 - Oct 2024",
		points: [
			"Built a BPO file allocation and tracking ERP from scratch with Next.js, Spring Boot and MongoDB, replacing manual assignment with automated, role-based allocation.",
			"Contributed to a production insurance claims platform, building new modules and UI under release deadlines.",
			"Managed branching, version control and deployment workflows on GitHub for a multi-developer team.",
		],
	},
];

const education = [
	{
		title: "Bachelor of Engineering (B.E.), Computer Science and Engineering",
		institution: "Park College of Engineering and Technology",
		date: "2020 - 2024",
		detail: "CGPA 7.5",
	},
	{
		title: "AWS Certified Solutions Architect - Associate",
		institution: "Amazon Web Services",
		date: "In progress",
		detail: "Certification",
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"Code, experiments and side projects — from MQTT tools to full stack apps.",
		name: "Indian-1234",
		image: "/tech/github.webp",
		link: "https://github.com/Indian-1234/",
	},
	{
		id: 2,
		testimonial:
			"I write about real-time systems, MQTT and Industrial IoT. Let's connect.",
		name: "Indian Manokaran",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/indian-m/",
	},
	{
		id: 3,
		testimonial:
			"For roles, freelance projects or collaboration — I usually reply within a day.",
		name: "indiantechdigi@gmail.com",
		image: "/company/gmail.png",
		link: "mailto:indiantechdigi@gmail.com",
	},
];

const projects: {
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
}[] = [
		{
			name: "Industrial Building Management System (BMS)",
			description:
				"Problem: A legacy BMS platform suffered from data loss, downtime and no reliable real-time visibility. Solution: Rebuilt the architecture from scratch. MQTT ingestion pipeline handling 10,000+ messages/min across 6 subsystems (HVAC, STP, WTP, UPS, lifts, battery) with buffering and backpressure. Time-series data in InfluxDB, relational data in SQL, real-time Next.js dashboards over WebSockets, and Python-based reporting.",
			tags: [
				{
					name: "dotnet",
					color: "blue-text-gradient",
				},
				{
					name: "mqtt",
					color: "green-text-gradient",
				},
				{
					name: "influxdb",
					color: "pink-text-gradient",
				},
				{
					name: "nextjs",
					color: "blue-text-gradient",
				},
				{
					name: "python",
					color: "green-text-gradient",
				},
			],
			image: "/company/bms.png",
			platform: "IoT Web Application",
		},
		{
			name: "BLE Welding Machine Interlocking App",
			description:
				"Problem: Welding parameters had to be set safely and only within approved limits. Solution: A Bluetooth Low Energy mobile app to set welding parameters such as voltage and current directly on the machine, with interlocking logic so only authorized users can change settings within safe limits, real-time status feedback, and reliable pairing/reconnection on the shop floor.",
			tags: [
				{
					name: "flutter",
					color: "blue-text-gradient",
				},
				{
					name: "bluetooth",
					color: "green-text-gradient",
				},
				{
					name: "iot",
					color: "pink-text-gradient",
				},
			],
			image: "/company/welding.png",
			platform: "Mobile",
		},
		{
			name: "Welding Tracking & Analytics Platform",
			description:
				"Problem: Production teams lacked real-time visibility of welding operations. Solution: Web and mobile platform with multi-role access, real-time tracking of welding operations and analytics dashboards.",
			tags: [
				{
					name: "flutter",
					color: "blue-text-gradient",
				},
				{
					name: "nextjs",
					color: "pink-text-gradient",
				},
				{
					name: "iot",
					color: "green-text-gradient",
				},
			],
			image: "/company/wtw.jpg",
			platform: "Mobile & Web App",
		},
		{
			name: "BPO File Allocation & Tracking ERP",
			description:
				"Problem: Manual file allocation in BPO operations caused delays and lacked visibility. Solution: Built ERP platform from scratch with automated file assignment based on employee roles and workload. Implemented role-based access control, real-time status tracking, and analytics dashboard. Reduced manual allocation overhead and improved processing visibility.",
			tags: [
				{
					name: "nextjs",
					color: "blue-text-gradient",
				},
				{
					name: "springboot",
					color: "green-text-gradient",
				},
				{
					name: "mongodb",
					color: "pink-text-gradient",
				},
			],
			image: "/company/erpallocation.png",
			platform: "Web Application",
		},
		{
			name: "TRB/TNPSC Exam Platform (Freelance)",
			description:
				"Problem: Need for scalable online examination platform with mobile support for competitive exam preparation. Solution: Built complete system with role-based dashboards for Admin, Faculty, and Students. Flutter mobile app for exam-taking with offline support. Web portal handles question bank management, scheduling, and automated result processing. Firebase for real-time sync.",
			tags: [
				{
					name: "flutter",
					color: "blue-text-gradient",
				},
				{
					name: "nextjs",
					color: "pink-text-gradient",
				},
				{
					name: "mongodb",
					color: "green-text-gradient",
				},
				{
					name: "firebase",
					color: "blue-text-gradient",
				},
			],
			image: "/company/trb.png",
			platform: "Mobile & Web App",
		},
		{
			name: "Insurance Claim Management System",
			description:
				"Problem: Insurance claim processing required streamlined workflow and document management. Solution: Contributed to a production system with MERN stack featuring claim submission workflows, document upload with validation, status tracking, and admin approval dashboard. Improved claim processing efficiency through structured workflows.",
			tags: [
				{
					name: "mongodb",
					color: "green-text-gradient",
				},
				{
					name: "expressjs",
					color: "pink-text-gradient",
				},
				{
					name: "react",
					color: "blue-text-gradient",
				},
				{
					name: "nodejs",
					color: "green-text-gradient",
				},
			],
			image: "/company/hms.jpg",
			platform: "Full Stack Web",
		},
		{
			name: "AI-Powered Smart Reply System",
			description:
				"Problem: Customer support teams needed faster response times for common queries. Solution: Integrated ChatGPT API to analyze incoming queries and generate context-aware response suggestions. Built review workflow for agents to approve or modify suggestions before sending. Reduced average response time for routine queries.",
			tags: [
				{
					name: "chatgpt-api",
					color: "blue-text-gradient",
				},
				{
					name: "nodejs",
					color: "green-text-gradient",
				},
				{
					name: "react",
					color: "pink-text-gradient",
				},
			],
			image: "/company/gbs.webp",
			platform: "AI Integration",
		},
	];

export { services, technologies, experiences, education, testimonials, projects };
