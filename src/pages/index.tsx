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
				<section id="hero" className="pt-24 min-h-screen flex flex-col items-center justify-center bg-black text-white scroll-mt-20">
					{/* Profile Picture */}
					<motion.img
						src="/profile.jpg"
						alt="Tru Bui"
						className="w-64 h-64 rounded-full mb-4 border-4 border-white shadow-lg"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8 }}
					/>

					{/* Title */}
					<motion.h1
						className="text-5xl font-bold text-center"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.2 }}
					>
						TJ Bui
					</motion.h1>

					{/* Short Description */}
					<motion.p
						className="mt-4 text-lg text-gray-300 text-center max-w-md"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.4 }}
					>
						I’m a Purdue CS student passionate about systems, C programming, and building full-stack apps that solve real-world problems.
					</motion.p>

					{/* Buttons */}
					<div className="mt-6 flex gap-4">
					<motion.a
						href="#projects"
						className="px-6 py-3 bg-white text-black rounded-lg shadow hover:bg-gray-200 font-semibold"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.6 }}
					>
						View Projects
					</motion.a>

					<motion.a
						href="#contact"
						className="px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-black font-semibold"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.8 }}
					>
						Contact Me
					</motion.a>
					</div>
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
