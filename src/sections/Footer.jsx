import { socialImgs } from "../constants";
const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-container'>
				<button className='text-2xl' color='white' onClick={() => window.scrollTo(0, 0)}>
					scroll to top &#8593;
				</button>
				<div className='socials text-left md:text-start'>
					{socialImgs.map((socialImg, index) => (
						<div
							src={socialImg.imgPath}
							alt='social icon'
							onClick={() => window.open(socialImg.src, "_blank")}
							key={index}
							className='icon'
						>
							<img src={socialImg.imgPath} alt='social icon' />
						</div>
					))}
				</div>
				<div className='flex flex-col justify-center'>
					<p className='text-center md:text-end'>
						© {new Date().getFullYear()} 21stdev. All right reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
