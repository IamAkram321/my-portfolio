export const navItems = [
	{ id: "1", name: "Home", link: "#home" },
	{ id: "2", name: "About", link: "#about" },
	{ id: "3", name: "Skills", link: "#skills" },
	{ id: "4", name: "Projects", link: "#projects" },
	{ id: "5", name: "Experience", link: "#experience" },
	{ id: "6", name: "Contact", link: "#contact" },
];

export const gridItems = [
	{
		id: 1,
		title:
			" I love tackling challenges and continuously evolving in the dynamic tech space",
		description: "",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
		imgClassName: "w-full h-full opacity-70",
		titleClassName: "justify-end",
		img: "/grid/b3.jpg",
		spareImg: "",
	},
	{
		id: 2,
		title: "Next.js: My Playground for Web Innovation",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	{
		id: 3,
		title: "My tech stack",
		description: "I constantly try to improve",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "Tech enthusiast with a passion for development.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid/grid.svg",
		spareImg: "/grid/b4.svg",
	},
	{
		id: 5,
		title: "Exploring the Core of Problem-Solving: DSA in Focus",
		description: "The Inside Scoop",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-[35rem] w-[20rem] opacity-65",
		titleClassName: "mt-20 items-start",
		img: "/grid/b6.png",
		spareImg: "/grid/grid.svg",
	},
	{
		id: 6,
		title: "Do you want to start a project together?",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
];

export const projects = [
	{
		id: 1,
		title: "Real-Time Collaborative Board",
		des: "Real-Time Board enabling multiple users to write and edit code simultaneously.",
		img: "/project_images/codesyncss.png",
		iconLists: [
			"/icons/React.svg",
			"/icons/Node.js.svg",
			"/icons/Express.svg",
			"/icons/MongoDB.svg",
			"/icons/socket.png",
			"/icons/Tailwind CSS.svg",
		],
		link: "https://github.com/IamAkram321/Code-Editor",
	},
	{
		id: 2,
		title: "Fraud Detection System",
		des: "A machine learning-based web application that predicts fraudulent transactions using supervised learning models.",
		img: "/project_images/fraud.png",
		iconLists: [
			"/icons/Python.svg",
			"/icons/NumPy.svg",
			"/icons/Pandas.svg",
			"/icons/scikit-learn.svg",
		],
		link: "https://github.com/IamAkram321/Fraud-Detection-App",
	},
	{
		id: 3,
		title: "Huffman Compressor",
		des: "AI-driven food ordering with natural language processing.",
		img: "/project_images/compressor.png",
		iconLists: [
			"/icons/C++.svg",
			"/icons/webassembly.svg",
			"/icons/JavaScript.svg",
		],
		link: "https://github.com/IamAkram321/Huffman-Compressor",
	},
	{
		id: 4,
		title: "WatchTogether (Ongoing)",
		des: "A collaborative web application that allows multiple users to watch YouTube videos in sync while chatting in real time.",
		img: "/project_images/watch1.png",
		iconLists: [
			"/icons/MongoDB.svg",
			"/icons/Node.js.svg",
			"/icons/Express.svg",
			"/icons/React.svg",
			"/icons/Tailwind CSS.svg",
		],
		link: "",
	},
	{
		id: 5,
		title: "SaarthiAi",
		des: "Developed a ChatGPT-like AI chat bot using Next.js and Assistant UI, integrated with Gemini API for conversational capabilities",
		img: "/project_images/bot.png",
		iconLists: [
			"/icons/MongoDB.svg",
			"/icons/Node.js.svg",
			"/icons/Express.svg",
			"/icons/Next.js.svg",
		],
		link: "https://github.com/IamAkram321/SaarthiAI",
	}
];

export const workExperience = [
	{
		id: 1,
		title: "Full Stack Web Developer Intern",
		company: "Innomatics Research Labs",
		timeline: "July 2024 - Present",
		desc: "Boosted user engagement, conversions, and organic traffic through responsive web components, SEO optimization, and enhanced mobile usability during a Full Stack Web Development Internship.",
		className: "md:col-span-2",
		thumbnail: "/exp1.svg",
	},
	{
		id: 1,
		title: "Technical Head",
		company: "Abhi",
		timeline: "July 2024 - Present",
		desc: "Boosted user engagement, conversions, and organic traffic through responsive web components, SEO optimization, and enhanced mobile usability during a Full Stack Web Development Internship.",
		className: "md:col-span-2",
		thumbnail: "/exp1.svg",
	},
];

export const socialMedia = [
	{
		id: 1,
		img: "/git.svg",
		link: "https://github.com/IamAkram321",
	},
	{
		id: 2,
		img: "/leetcode.svg",
		link: "https://leetcode.com/u/IamAkram321/",
	},
	{
		id: 3,
		img: "/link.svg",
		link: "https://www.linkedin.com/in/akramshahjada/",
	},
];

export const techStack = [
	{ svg: "/icons/TypeScript.svg" },
	{ svg: "/icons/React.svg" },
	{ svg: "/icons/Next.js.svg" },
	{ svg: "/icons/Node.js.svg" },
	{ svg: "/icons/Express.svg" },
	{ svg: "/icons/Tailwind CSS.svg" },
	{ svg: "/icons/JavaScript.svg " },
	{ svg: "/icons/MongoDB.svg" },
	{ svg: "/icons/HTML5.svg" },
	{ svg: "/icons/CSS3.svg" },
	{ svg: "/icons/Nodemon.svg" },
];

export const languagesAndTools = [
	{ svg: "/icons/Git.svg" },
	{ svg: "/icons/GitHub.svg" },
	{ svg: "/icons/NPM.svg" },
	{ svg: "/icons/MySQL.svg" },
	{ svg: "/icons/Mongoose.js.svg" },
	{ svg: "/icons/Material UI.svg" },
	{ svg: "/icons/Pandas.svg" },
];

export const frameWorks = [
	{ svg: "/icons/Python.svg" },
	{ svg: "/icons/C++.svg" },
	{ svg: "/icons/C.svg" },
	{ svg: "/icons/Postman.svg" },
	{ svg: "/icons/VS code.svg" },
	{ svg: "/icons/NumPy.svg" },
	{ svg: "/icons/scikit-learn.svg" },
	{ svg: "/icons/Canva.svg" },
	{ svg: "/icons/Adobe Photoshop.svg" },
];
