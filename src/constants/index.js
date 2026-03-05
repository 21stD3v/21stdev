const navLinks = [
	{
		name: "Work",
		link: "#work",
	},
	{
		name: "Experience",
		link: "#experience",
	},
	{
		name: "Skills",
		link: "#skills",
	},
	{
		name: "Testimonials",
		link: "#testimonials",
	},
];
const words = [
	{ text: "Bold Ideas", imgPath: "/images/ideas.svg" },
	{ text: "Web3 Concepts", imgPath: "/images/concepts.svg" },
	{ text: "Protocol", imgPath: "/images/designs.svg" },
	{ text: "Contracts", imgPath: "/images/code.svg" },
	{ text: "Solana", imgPath: "/images/ideas.svg" },
	{ text: "Scaling", imgPath: "/images/concepts.svg" },
	{ text: "On-Chain", imgPath: "/images/designs.svg" },
	{ text: "Products", imgPath: "/images/code.svg" },
];
const counterItems = [
	{ value: 4, suffix: "+", label: "Years of Experience" },
	{ value: 18, suffix: "+", label: "Satisfied Clients" },
	{ value: 30, suffix: "+", label: "Completed Projects" },
	{ value: 85, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
	{
		imgPath: "/images/logos/company-logo-1.png",
	},

	{
		imgPath: "/images/logos/company-logo-4.png",
	},
	{
		imgPath: "/images/logos/company-logo-5.png",
	},

	{
		imgPath: "/images/logos/company-logo-7.png",
	},

	{
		imgPath: "/images/logos/company-logo-9.png",
	},
	{
		imgPath: "/images/logos/company-logo-10.png",
	},
	{
		imgPath: "/images/logos/company-logo-11.png",
	},
];

const abilities = [
	{
		imgPath: "/images/seo.png",
		title: "Quality Focus",
		desc: "Delivering high-quality results while maintaining attention to every detail.",
	},
	{
		imgPath: "/images/chat.png",
		title: "Reliable Communication",
		desc: "Keeping you updated at every step to ensure transparency and clarity.",
	},
	{
		imgPath: "/images/time.png",
		title: "On-Time Delivery",
		desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
	},
];

const techStackImgs = [
	{
		name: "Javascript Developer",
		imgPath: "/images/logos/javascript.svg",
	},
	{
		name: "Typescript Developer",
		imgPath: "/images/logos/typescript.svg",
	},
	{
		name: "Nodejs Developer",
		imgPath: "/images/logos/node.png",
	},
	{
		name: "Next Developer",
		imgPath: "/images/logos/nextjs.svg",
	},
	{
		name: "React-Native Developer",
		imgPath: "/images/logos/react.png",
	},
	{
		name: "Tailwindcss ",
		imgPath: "/images/logos/tailwindcss.svg",
	},
];

// const techStackIcons = [
//   {
//     name: "React Developer",
//     modelPath: "/models/react_logo-transformed.glb",
//     scale: 1,
//     rotation: [0, 0, 0],
//   },
//   {
//     name: "Backend Developer",
//     modelPath: "/models/node-transformed.glb",
//     scale: 5,
//     rotation: [0, -Math.PI / 2, 0],
//   },
//   {
//     name: "Three.js Developer",
//     modelPath: "/models/three.js-transformed.glb",
//     scale: 0.05,
//     rotation: [0, 0, 0],
//   },

// ];

const expCards = [
	{
		review:
			"Abduljalal's brought creativity and technical expertise to the team, significantly improving our back- end performance.His work has been invaluable in delivering faster experiences.",
		imgPath: "/images/exp1.png",
		logoPath: "/images/logo1.png",
		title: "Full Stack Developer",
		date: "March 2024 - November 2024",
		responsibilities: [
			"Joined a team of 3 to develop a Website to create a delightful user experience forover 35000 students",
			"Implemented backend solutions with Express.js, Typescript, and MySQL, ensuring optimal performance and scalability.",
			"Actively participated in collaborative meetings and code reviews, delivering high-quality, efficient solutions in a fast - paced environment.",
		],
	},
	{
		review:
			"Abduljalal’s contributions to clients's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
		imgPath: "/images/logo1.jpeg",
		logoPath: "/images/exp2.jpg",
		title: "Web Developer",
		date: "June 2023 - January 2024",
		responsibilities: [
			"Optimized SEO strategies, increasing site visibility by 90% for two businesses, driving substantial traffic growth, and expanding the customer base to over 1,000 active users.",
			"Implemented state management in a complex dashboard project using RTK Query and Redux Toolkit, improving data flow and enhancing the user experience with seamless and responsive interactions.",
		],
	},
];

const expLogos = [
	{
		name: "logo1",
		imgPath: "/images/logo1.png",
	},
	{
		name: "logo2",
		imgPath: "/images/logo2.png",
	},
];

const testimonials = [
	{
		name: "Joshua Abu",
		mentions: "joshuaabu526@gmail.com",
		review:
			"I can’t say enough good things about 21stdev. He was able to take my complex project requirements and turn them into a seamless, functional website. His E-commerce CMS abilities are the best.",
		imgPath: "/images/client1.png",
	},
	{
		name: "Usman Matanx",
		mentions: "vizulabz@gmail.com 📞+234 816 394 6911",
		review:
			"Working with 21sdev was an absolute pleasure. As a developer, he brought our creative visions to life with precision, efficiency, and an exceptional eye for detail. Whether translating complex design mockups into clean, responsive code or suggesting smart functionality improvements, their contributions consistently elevated our projects. Communication was seamless, deadlines were always met, and the final product never failed to impress our clients. We look forward to collaborating again soon!",
		imgPath: "/images/logo1.jpeg",
	},

	{
		name: "Ahmad Sadiq",
		mentions: "www.microscale.net",
		review:
			"Collaborating with Abduljalal was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
		imgPath: "/images/client3.png",
	},
];

const socialImgs = [
	{
		name: "insta",
		imgPath: "/images/insta.svg",
		src: "https://www.instagram.com/21stdev",
	},
	{
		name: "x",
		imgPath: "/images/xx.svg",
		src: "https://x.com/21stdev",
	},
];

export {
	abilities,
	counterItems,
	expCards,
	expLogos,
	logoIconsList,
	navLinks,
	socialImgs,
	// techStackIcons,
	techStackImgs,
	testimonials,
	words
};

