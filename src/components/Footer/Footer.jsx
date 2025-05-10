import { Link } from 'react-router-dom'
import { images } from '../../constants';
import './Footer.css'
import useLightMode from '../../hooks/useIsLightMode';

const Footer = () => {
	const year = new Date().getFullYear();
	const isLightMode = useLightMode();
	
	return (
		<div className="footer pad">
			<div className="container">

				<div className="pls">
					<div className="pls-left anim left">
						<Link to="/" title="Tatiana Charalampidou">
							<img 
								width="350" 
								height="142" 
								src={isLightMode ? images.logoFooterLight : images.logoFooter}
								alt="Tatiana Charalampidou Logo Footer" 
							/>
						</Link>
					</div>
					<div className="pls-right anim">
						<h1>Please contact me</h1>
						<h3>Via Email</h3>
						<div className="link mail">
							<a href="mailto:charalampidou.tania@gmail.com">charalampidou.tania@gmail.com</a><br />
						</div>
						<h3>Connect with me on</h3>
						<div className="link social-link">
							<a href="https://www.linkedin.com/in/tatiana-charalampidou/" target="_blank" rel="noopener noreferrer nofollow" title="Linkedin">
								<svg width="30" height="30">
									<use xlinkHref="#icon-linkedin" />
								</svg>
							</a>
						</div>

					</div>
				</div>

				<div className="copyright">©{year} |  <span>#Charalampidou</span></div>

			</div>
		</div>
	)
}

export default Footer