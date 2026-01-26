import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "@/app/styles/globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-sans",
});
export const metadata: Metadata = {
	title: "Indian M | Full Stack & IoT Engineer",
	description: "Full Stack & IoT Engineer specializing in real-time systems, Building Management Systems (BMS), MQTT data processing, and cloud infrastructure. Experienced with React, Next.js, .NET, Flutter, Python, AWS, and Azure.",
	keywords: ["Full Stack Engineer", "IoT Engineer", "BMS Developer", "MQTT", "Real-Time Systems", "AWS", "Azure", "Next.js", "React", ".NET", "Flutter"],
	openGraph: {
		title: "Indian M | Full Stack & IoT Engineer",
		description: "Building real-time IoT systems and industrial platforms with modern web technologies.",
		type: "website",
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
