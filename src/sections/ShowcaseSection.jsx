import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
	const sectionRef = useRef(null);
	const rydeRef = useRef(null);
	const libraryRef = useRef(null);
	const ycDirectoryRef = useRef(null);

	useGSAP(() => {
		// Animation for the main section
		gsap.fromTo(
			sectionRef.current,
			{ opacity: 0 },
			{ opacity: 1, duration: 1.5 },
		);

		// Animations for each app showcase
		const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

		cards.forEach((card, index) => {
			gsap.fromTo(
				card,
				{
					y: 50,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					delay: 0.3 * (index + 1),
					scrollTrigger: {
						trigger: card,
						start: "top bottom-=100",
					},
				},
			);
		});
	}, []);

	return (
		<section
			id='showcase'
			className='flex-center section-padding'
			ref={sectionRef}
		>
			<div className='w-full h-full md:px-20 px-5'>
				<TitleHeader title='Featured Projects' sub='🕸 My Project Overview' />
				<div id='work' className='app-showcase'>
					<div className='w-full'>
						<div className='showcaselayout'>
							<div ref={rydeRef} className='first-project-wrapper'>
								<h1 className='text-content md:text-3xl text-white-50 mb-4'>
									Wayward Steez
								</h1>{" "}
								<div className='#'>
									<img src='/images/wayward.jpeg' alt='Ryde App Interface' />
								</div>
								<div className='text-content'>
									<h3>
										A comprehensive e-commerce website built with a complete
										Content Management System (CMS), enabling seamless online
										shopping experiences and efficient store management.{" "}
									</h3>
									<p className='text-white-50 md:text-xl'>
										This full-featured platform combines modern web technologies
										with robust backend
									</p>
								</div>
							</div>
							<div className='project-list-wrapper overflow-hidden'>
								<div className='project' ref={libraryRef}>
									<div className=' #'>
										<h1 className='text-content md:text-3xl text-white mb-4'>
											Micro scale Embedded
										</h1>
										{""}
										<img src='/images/project2.png' alt='E commerce site' />
									</div>
									<h3 className='text-content mt-4'>
										Full CMS e-commerce website with secure payments, product
										management, and admin dashboard. Built with modern web
										technologies for scalable online retail.
									</h3>
								</div>

								<div className='project' ref={ycDirectoryRef}>
									<div className='#'>
										<h2 className='text-content md:text-2xl text-white mb-4'>
											School of Postgraduate studies, NSUK
										</h2>
										<img src='/images/project3.png' alt='spgs' />
									</div>
									<h3 className='text-content mt-4'>
										Postgraduate Studies management system for student
										admissions, registration, and academic records with secure
										authentication and admin controls.
									</h3>{" "}
								</div>
							</div>{" "}
							<div className='project-list-wrapper overflow-hidden'>
								<div className='project' ref={libraryRef}>
									<div className=' #'>
										<h1 className='text-content md:text-3xl text-white mb-4'>
											PayHold
										</h1>
										{""}
										<img src='/images/payhold.png' alt='E commerce site' />
									</div>
									<h3 className='text-content mt-4'>
										Secure escrow service for local transactions. Holds payments
										until delivery confirmation, ensuring safe buying and
										selling with complete buyer protection.
									</h3>
								</div>

								<div className='project' ref={ycDirectoryRef}>
									<div className='#'>
										<h2 className='text-content md:text-2xl text-white mb-4'>
											SaukiCars
										</h2>
										<img src='/images/sauki.png' alt='spgs' />
									</div>
									<h3 className='text-content mt-4'>
										Nigeria's trusted car dealership platform for buying and
										selling premium vehicles. Features advanced search,
										inventory browsing, and transparent pricing for quality
										cars.
									</h3>{" "}
								</div>
							</div>{" "}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AppShowcase;
