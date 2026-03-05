import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
	{
		emoji: "⛓️",
		title: "Blockchain",
		color: "#5eead4",
		skills: [
			"Solana",
			"Rust",
			"Anchor Framework",
			"Web3.js",
			"Solana Web3.js",
			"SPL Tokens",
			"NFT Programs",
			"PDAs",
			"CPIs",
			"Metaplex",
			"Helius",
			"Jito",
			"Jupiter SDK",
			"Solana CLI",
		],
	},
	{
		emoji: "💎",
		title: "DeFi & Protocols",
		color: "#818cf8",
		skills: [
			"DeFi Development",
			"DEX Integration",
			"Trading Bots",
			"Volume Services",
			"Sniper Tools",
			"Yield Farming",
			"Liquidity Pools",
			"Token Standards (ERC20/721/1155)",
			"AMM Protocols",
			"Staking",
			"Lending Protocols",
			"Flash Loans",
			"Price Oracles",
		],
	},
	{
		emoji: "🎨",
		title: "Frontend",
		color: "#f472b6",
		skills: [
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"Tailwind CSS",
			"Three.js",
			"Framer Motion",
		],
	},
	{
		emoji: "⚙️",
		title: "Backend & Infrastructure",
		color: "#fb923c",
		skills: [
			"Node.js",
			"Rust",
			"Express.js",
			"NestJS",
			"FastAPI",
			"Django",
			"MongoDB",
			"PostgreSQL",
			"MySQL",
			"GraphQL",
			"REST API",
		],
	},
	{
		emoji: "🔒",
		title: "Testing & Security",
		color: "#34d399",
		skills: [
			"Smart Contract Auditing",
			"Security Best Practices",
			"Unit Testing",
			"Integration Testing",
			"E2E Testing",
			"Slither",
			"OpenZeppelin Defender",
			"Tenderly",
			"Access Control",
		],
	},
	{
		emoji: "🚀",
		title: "DevOps & Cloud",
		color: "#60a5fa",
		skills: [
			"Git",
			"Docker",
			"Kubernetes",
			"CI/CD",
			"GitHub Actions",
			"AWS",
			"Azure",
			"Google Cloud",
			"Vercel",
			"Heroku",
			"Nginx",
			"Linux",
			"Jenkins",
			"Terraform",
		],
	},
];

const TechStack = () => {
	useGSAP(() => {
		gsap.fromTo(
			".skill-card",
			{ y: 60, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.7,
				ease: "power3.out",
				stagger: 0.12,
				scrollTrigger: {
					trigger: "#skills",
					start: "top center",
				},
			},
		);
	});

	return (
		<div id='skills' className='flex-center section-padding'>
			<div className='w-full h-full md:px-10 px-5'>
				<TitleHeader
					title='How I Contribute & My Key Skills'
					sub=' 👨🏿‍💻 Tech Stack'
				/>

				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
						gap: "1.5rem",
						marginTop: "3rem",
					}}
				>
					{skillCategories.map((category, index) => (
						<div
							key={index}
							className='skill-card'
							style={{
								background: "rgba(255,255,255,0.03)",
								border: "1px solid rgba(255,255,255,0.08)",
								borderRadius: "16px",
								padding: "1.75rem",
								backdropFilter: "blur(12px)",
								transition:
									"border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
								cursor: "default",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.borderColor = category.color + "55";
								e.currentTarget.style.transform = "translateY(-4px)";
								e.currentTarget.style.boxShadow = `0 12px 40px ${category.color}18`;
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
								e.currentTarget.style.transform = "translateY(0)";
								e.currentTarget.style.boxShadow = "none";
							}}
						>
							{/* Header */}
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "0.75rem",
									marginBottom: "1rem",
								}}
							>
								<span style={{ fontSize: "1.75rem", lineHeight: 1 }}>
									{category.emoji}
								</span>
								<h3
									style={{
										color: category.color,
										fontSize: "1.15rem",
										fontWeight: 700,
										margin: 0,
										letterSpacing: "0.01em",
									}}
								>
									{category.title}
								</h3>
							</div>

							{/* Divider */}
							<div
								style={{
									height: "1px",
									background: `linear-gradient(to right, ${category.color}44, transparent)`,
									marginBottom: "1.25rem",
								}}
							/>

							{/* Skill Badges */}
							<div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
								{category.skills.map((skill, skillIndex) => (
									<span
										key={skillIndex}
										style={{
											padding: "0.3rem 0.75rem",
											borderRadius: "6px",
											border: "1px solid rgba(255,255,255,0.12)",
											background: "rgba(255,255,255,0.05)",
											color: "rgba(255,255,255,0.82)",
											fontSize: "0.8rem",
											fontWeight: 500,
											letterSpacing: "0.02em",
											transition:
												"background 0.2s, border-color 0.2s, color 0.2s",
											cursor: "default",
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.background = category.color + "22";
											e.currentTarget.style.borderColor = category.color + "66";
											e.currentTarget.style.color = "#fff";
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.background =
												"rgba(255,255,255,0.05)";
											e.currentTarget.style.borderColor =
												"rgba(255,255,255,0.12)";
											e.currentTarget.style.color = "rgba(255,255,255,0.82)";
										}}
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TechStack;
