import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "@/app/styles/globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-sans",
});

const SITE_URL = "https://portfolio-phi-ten-17.vercel.app";
const TITLE = "Indian Manokaran | Industrial IoT Software Engineer";
const DESCRIPTION =
	"Indian Manokaran — Industrial IoT Software Engineer building real-time MQTT systems, BMS platforms and full stack web & mobile apps with .NET, Next.js, Python and AWS.";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: TITLE,
	description: DESCRIPTION,
	applicationName: "Indian Manokaran Portfolio",
	authors: [{ name: "Indian Manokaran", url: SITE_URL }],
	creator: "Indian Manokaran",
	keywords: [
		"Indian Manokaran",
		"Industrial IoT Software Engineer",
		"Industrial IoT",
		"IoT Engineer",
		"BMS Developer",
		"Building Management System",
		"MQTT",
		"InfluxDB",
		"Real-Time Systems",
		"Full Stack Developer",
		"AWS",
		"Azure",
		"Next.js",
		"React",
		".NET",
		"Flutter",
	],
	alternates: {
		canonical: SITE_URL,
	},
	openGraph: {
		type: "website",
		url: SITE_URL,
		siteName: "Indian Manokaran",
		title: TITLE,
		description: DESCRIPTION,
		locale: "en_US",
		images: [
			{
				url: "/og.png",
				width: 1200,
				height: 630,
				alt: "Indian Manokaran — Industrial IoT Software Engineer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: TITLE,
		description: DESCRIPTION,
		images: ["/og.png"],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={fontSans.variable}>{children}</body>
		</html>
	);
}
