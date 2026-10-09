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

const services = [
	{
		title: "Full Stack Developer",
		icon: "/web.webp",
	},
	{
		title: "Mobile App Developer",
		icon: "/backend.webp",
	},
	{
		title: "IoT & BMS Engineer",
		icon: "/creator.webp",
	},
	{
		title: "Cloud & DevOps",
		icon: "/backend.webp",
	},
];

const technologies = [
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "MongoDB",
		icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
	},
	{
		name: "PostgreSQL",
		icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
	},
	{
		name: ".NET Core",
		icon: "/tech/dotnet.webp",
	},
	{
		name: "Node.js",
		icon: "/tech/nodejs.webp",
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
		name: "DevOps (Docker)",
		icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
	},
	{
		name: "Python",
		icon: "/tech/python.webp",
	},
	{
		name: "AWS",
		icon: "/tech/aws.svg",
	},
	{
		name: "Azure",
		icon: "/tech/azure.svg",
	},
];

const experiences = [
	{
		title: "Software Engineering Intern",
		company_name: "Xentrix High-Tech Private Limited",
		icon: "/company/xentrix.png",
		iconBg: "#383E56",
		date: "Jan 2024 - Mar 2024",
		points: [
			"Built proficiency in Next.js, Spring Boot, and MongoDB through hands-on project work.",
			"Contributed to Insurance Claim System by developing responsive UI components using React and MERN stack.",
			"Collaborated with team members to implement features and resolve bugs in production systems.",
			"Participated in Agile ceremonies including daily standups and sprint planning."
		],
	},
	{
		title: "Software Engineer",
		company_name: "Xentrix High-Tech Private Limited",
		icon: "/company/xentrix.png",
		iconBg: "#E6DEDD",
		date: "Apr 2024 - Sep 2024",
		points: [
			"Built BPO file auto-allocation and tracking system from scratch using Next.js, Spring Boot, and MongoDB with role-based access control.",
			"Developed new features for Insurance Claim project, improving workflow efficiency and user experience.",
			"Delivered end-to-end full-stack solutions with RESTful APIs and responsive frontend interfaces.",
			"Implemented coding standards and maintainable architecture patterns across projects."
		],
	},
	{
		title: "Full Stack & IoT Engineer",
		company_name: "Sustainabyte Private Limited",
		icon: "/company/sustainabyte.png",
		iconBg: "#383E56",
		date: "Dec 2024 - Present",
		points: [
			"Developed Bluetooth interlocking system mobile app and an industrial welding tracking system using Flutter with custom analytics dashboards.",
			"Building comprehensive BMS platform covering HVAC, STP, WTP, Lift, UPS, and Battery Management using .NET, InfluxDB, Next.js, and Python for real-time MQTT data ingestion and processing.",
			"Identified critical architectural issues in existing BMS product and redesigned the system for improved scalability and reliability.",
			"Set up CI/CD pipelines using GitHub Actions and Jenkins, deploying applications on AWS and Azure.",
			"Coordinating technical decisions, conducting code reviews, and supporting team members on implementation."
		],
	},
];
const testimonials = [
	{
		id: 1,
		testimonial:
			"GitHub is the world's leading platform for developers to collaborate, share code, and showcase projects. Check out my repositories ranging from full-stack applications",
		name: "Indian M",
		image: "/tech/github.webp",
		link: "https://github.com/Indian-1234/",
	},
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform. Connect with me professionally to explore collaboration opportunities and stay updated with my work.",
		name: "Indian M",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/indian-m/",
	},
	{
		id: 3,
		testimonial:
			"Reach out to me directly via email for project inquiries, collaboration opportunities, or any professional discussions. I'm always open to connecting!",
		name: "Indian M",
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
			name: "Building Management System (BMS)",
			description:
				"Problem: Existing BMS product had critical performance issues and lacked real-time visibility. Solution: Redesigned the entire system architecture from scratch. Built data ingestion pipeline handling MQTT messages from 100+ sensors, storing time-series data in InfluxDB. Next.js dashboard provides real-time monitoring for HVAC, STP, WTP, UPS, and Battery systems. Python scripts handle data aggregation and automated report generation.",
			tags: [
				{
					name: "nextjs",
					color: "blue-text-gradient",
				},
				{
					name: "dotnet",
					color: "green-text-gradient",
				},
				{
					name: "influxdb",
					color: "pink-text-gradient",
				},
				{
					name: "mqtt",
					color: "green-text-gradient",
				},
				{
					name: "python",
					color: "blue-text-gradient",
				},
			],
			image: "/company/bms.png",
			platform: "IoT Web Application",
		},
		{
			name: "Welding Tracking & Analytics System",
			description:
				"Problem: Manufacturing clients needed real-time tracking of welding operations and operator performance. Solution: Built Flutter mobile app with Bluetooth connectivity for equipment interlocking. Web dashboard aggregates data across multiple production lines. System tracks welding parameters, operator metrics, and generates compliance reports. Deployed for automotive manufacturing clients.",
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
				{
					name: "bluetooth",
					color: "blue-text-gradient",
				},
			],
			image: "/company/welding.png",
			platform: "Mobile & Web App",
		},
		{
			name: "BPO File Allocation & Tracking System",
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
			name: "Insurance Claim Management System",
			description:
				"Problem: Insurance claim processing required streamlined workflow and document management. Solution: Developed full-stack system with MERN stack featuring claim submission workflows, document upload with validation, status tracking, and admin approval dashboard. Improved claim processing efficiency through structured workflows.",
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

export { services, technologies, experiences, testimonials, projects };
