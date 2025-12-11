"use client";

import React from "react";

import { techStack, frameWorks } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { languagesAndTools } from "@/data/index";

const TechStack = () => {
	return (
		<section id="skills" className="md:pt-[15vh] md:pb-[5vh]">
			<h1 className="heading">
				My
				<span className="text-purple"> tech Stack</span>
			</h1>

			<div className="flex flex-col items-center md:mt-[7vh]">
				<div
					className="h-[35vh] md:min-h-[55vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden gap-2 md:gap-6"
				>
					<InfiniteMovingCards
						items={techStack}
						direction="left"
						speed="slow"
						className="h-[10vh] md:h-[15vh] "
					/>
					<InfiniteMovingCards
						items={frameWorks}
						direction="right"
						speed="slow"
						className="h-[10vh] md:h-[15vh]"
					/>
					<InfiniteMovingCards
						items={languagesAndTools}
						direction="left"
						speed="slow"
						className="h-[10vh] md:h-[15vh]"
					/>
				</div>
			</div>
		</section>
	);
};

export default TechStack;
