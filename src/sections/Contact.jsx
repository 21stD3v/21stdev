import emailjs from "@emailjs/browser";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
	{
		icon: (
			<svg
				width='18'
				height='18'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<rect x='2' y='4' width='20' height='16' rx='2' />
				<path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
			</svg>
		),
		label: "Email",
		value: "21st.cen.devs@gmail.com",
		href: "mailto:21st.cen.devs@gmail.com",
		color: "#818cf8",
	},
	{
		icon: (
			<svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
				<path d='M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z' />
			</svg>
		),
		label: "Discord",
		value: "Discord",
		href: "#",
		color: "#5865F2",
	},
	{
		icon: (
			<svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
				<path d='M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z' />
			</svg>
		),
		label: "LinkedIn",
		value: "linkedin.com/in/21stdev",
		href: "https://linkedin.com/in/21stdev",
		color: "#0ea5e9",
	},
	{
		icon: (
			<svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor'>
				<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
			</svg>
		),
		label: "GitHub",
		value: "github.com/21std3v",
		href: "https://github.com/21std3v",
		color: "#e2e8f0",
	},
];

const Contact = () => {
	const formRef = useRef(null);
	const [loading, setLoading] = useState(false);
	const [sent, setSent] = useState(false);
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	useGSAP(() => {
		gsap.fromTo(
			".contact-animate",
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.7,
				ease: "power3.out",
				stagger: 0.15,
				scrollTrigger: { trigger: "#contact", start: "top center" },
			},
		);
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			await emailjs.sendForm(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				formRef.current,
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
			);
			setForm({ name: "", email: "", message: "" });
			setSent(true);
			setTimeout(() => setSent(false), 4000);
		} catch (error) {
			console.error("EmailJS Error:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section id='contact' className='flex-center section-padding'>
			<div className='w-full h-full md:px-10 px-5'>
				<TitleHeader
					title="Get in Touch – Let's Connect"
					sub="💬 Have questions or ideas? Let's talk! 🚀"
				/>

				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gap: "1.5rem",
						marginTop: "3rem",
						alignItems: "start",
					}}
				>
					{/* Left — Contact Info Cards */}
					<div
						className='contact-animate'
						style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
					>
						<p
							style={{
								color: "rgba(255,255,255,0.5)",
								fontSize: "0.85rem",
								textTransform: "uppercase",
								letterSpacing: "0.1em",
								marginBottom: "0.25rem",
							}}
						>
							Reach out directly
						</p>

						{contactInfo.map((item, i) => (
							<a
								key={i}
								href={item.href}
								target='_blank'
								rel='noopener noreferrer'
								style={{
									display: "flex",
									alignItems: "center",
									gap: "1rem",
									padding: "1rem 1.25rem",
									background: "rgba(255,255,255,0.03)",
									border: "1px solid rgba(255,255,255,0.08)",
									borderRadius: "12px",
									textDecoration: "none",
									transition:
										"border-color 0.25s, background 0.25s, transform 0.25s",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.borderColor = item.color + "55";
									e.currentTarget.style.background = item.color + "0f";
									e.currentTarget.style.transform = "translateX(4px)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
									e.currentTarget.style.background = "rgba(255,255,255,0.03)";
									e.currentTarget.style.transform = "translateX(0)";
								}}
							>
								{/* Icon box */}
								<div
									style={{
										width: "40px",
										height: "40px",
										borderRadius: "10px",
										background: item.color + "18",
										border: `1px solid ${item.color}33`,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										color: item.color,
										flexShrink: 0,
									}}
								>
									{item.icon}
								</div>
								<div>
									<p
										style={{
											color: "rgba(255,255,255,0.4)",
											fontSize: "0.72rem",
											textTransform: "uppercase",
											letterSpacing: "0.08em",
											margin: 0,
										}}
									>
										{item.label}
									</p>
									<p
										style={{
											color: "rgba(255,255,255,0.85)",
											fontSize: "0.9rem",
											fontWeight: 500,
											margin: 0,
										}}
									>
										{item.value}
									</p>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
