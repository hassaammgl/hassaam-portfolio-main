import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box, useTexture } from "@react-three/drei";
import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import { useRef, useEffect, useMemo, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim"; //

const About = () => {
	const [init, setInit] = useState(false);

	// this should be run only once per application lifetime
	// useEffect(() => {
	//   initParticlesEngine(async (engine) => {
	//     await loadSlim(engine);
	//   }).then(() => {
	//     setInit(true);
	//   });
	// }, []);

	return (
		<section className="max-container">
			<h1 className="head-text">
				Hello, I'm{" "}
				<span className="blue-gradient_text font-semibold drop-shadow">
					{" "}
					Hassaam
				</span>{" "}
				👋
			</h1>

			<div className="mt-5 flex flex-col gap-3 text-slate-500">
				<p>
					Web Developer based in Pakistan, specializing in technical
					education through hands-on learning and building
					applications.
				</p>
			</div>

			<div className="py-10 flex flex-col">
				<h3 className="subhead-text">My Skills</h3>

				<div className="mt-16 flex flex-wrap  gap-12">
					{skills.map((skill) => (
						// <Canva key={skill.name} skill={skill} />
						<Skiller key={skill.name} skill={skill} />
					))}
				</div>
			</div>

			<div className="py-16">
				<h3 className="subhead-text">Work Experience.</h3>
				<div className="mt-5 flex flex-col gap-3 text-slate-500">
					<p>
						I've worked with all sorts of companies, leveling up my
						skills and teaming up with smart people. Here's the
						rundown:
					</p>
				</div>

				<div className="mt-12 flex">
					<VerticalTimeline>
						{experiences.map((experience, index) => (
							<VerticalTimelineElement
								key={experience.company_name}
								date={experience.date}
								iconStyle={{ background: experience.iconBg }}
								icon={
									<div className="flex justify-center items-center w-full h-full">
										<img
											src={experience.icon}
											alt={experience.company_name}
											className="w-[60%] h-[60%] object-contain"
										/>
									</div>
								}
								contentStyle={{
									borderBottom: "8px",
									borderStyle: "solid",
									borderBottomColor: experience.iconBg,
									boxShadow: "none",
								}}
							>
								<div>
									<h3 className="text-black text-xl font-poppins font-semibold">
										{experience.title}
									</h3>
									<p
										className="text-black-500 font-medium text-base"
										style={{ margin: 0 }}
									>
										{experience.company_name}
									</p>
								</div>

								<ul className="my-5 list-disc ml-5 space-y-2">
									{experience.points.map((point, index) => (
										<li
											key={`experience-point-${index}`}
											className="text-black-500/50 font-normal pl-1 text-sm"
										>
											{point}
										</li>
									))}
								</ul>
							</VerticalTimelineElement>
						))}
					</VerticalTimeline>
				</div>
			</div>

			<hr className="border-slate-200" />

			<CTA />
		</section>
	);
};

export default About;

const Skiller = ({ skill }) => {
	return (
		<div className="block-container w-20 h-20">
			<div className="btn-back rounded-xl" />
			<div className="btn-front rounded-xl flex justify-center items-center">
				<img
					src={skill.imageUrl}
					alt={skill.name}
					className="w-1/2 h-1/2 object-contain"
				/>
			</div>
		</div>
	);
};
// const Skiller2 = ({ skill }) => {
//   const texture = useTexture(skill.imageUrl)
//   return (
//     <Box args={[4, 50, 50]} >
//        <meshStandardMaterial map={texture} color={"white"} />

//     </Box>
//   )
// }

const Canva = ({ skill }) => {
	return (
		<Canvas className="block-container border-2 w-40 h-40">
			<OrbitControls enableZoom={false} />
			<ambientLight />
			<pointLight position={[10, 10, 10]} />

			<Skiller skill={skill} />
		</Canvas>
	);
};
