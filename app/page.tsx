import {
	About,
	Contact,
	Experience,
	Education,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	LazyStarsCanvas,
} from "./components";

export default function Home() {
	return (
		<div className="relative z-0 bg-primary font-sans">
			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Navbar />
				<Hero />
			</div>
			<About />
			<Experience />
			<Tech />
			<Works />
			<Feedbacks />
			<Education />
			<div className="relative z-0">
				<Contact />
				<LazyStarsCanvas />
			</div>
		</div>
	);
}
