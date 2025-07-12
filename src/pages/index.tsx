import { motion } from "framer-motion";

export default function Home() {
	return (
	<>
		<nav className="fixed top-0 w-full bg-white shadow p-4 z-10">
		<ul className="flex justify-center gap-8 text-black">
			<li><a href="#hero" className="hover:underline">Home</a></li>
			<li><a href="#projects" className="hover:underline">Projects</a></li>
			<li><a href="#experience" className="hover:underline">Experience</a></li>
			<li><a href="#contact" className="hover:underline">Contact</a></li>
		</ul>
		</nav>

		<main className="scroll-smooth">
		<section id="hero" className="pt-24 min-h-screen flex items-center justify-center bg-black text-white scroll-mt-20">	
			<motion.h1
				className="text-5xl font-bold"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				Hi, I’m Tru Bui
			</motion.h1>
		</section>

		<section id="projects" className="min-h-screen p-8 bg-gray-100 text-black scroll-mt-20">
			<h2 className="text-3xl font-bold mb-4">Projects</h2>
			{/* Add project cards here */}
		</section>

		<section id="experience" className="min-h-screen p-8 bg-white text-black scroll-mt-20">
			<h2 className="text-3xl font-bold mb-4">Experience</h2>
			{/* Experience timeline (we can animate this later) */}
		</section>

		<section id="contact" className="min-h-screen p-8 bg-gray-200 text-black scroll-mt-20">
			<h2 className="text-3xl font-bold mb-4">Contact</h2>
			<p>tjbui@tech4research.com</p>
		</section>
		</main>
	</>
	);
}
