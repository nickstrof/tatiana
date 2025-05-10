import './Hero.css'
import HeroMedia from './HeroMedia/HeroMedia';
import HeroInfo from './HeroInfo/HeroInfo';

const Hero = () => {
	return (
		<>
			<div className='hero pad'>
				<div className="container">
					<div className="line anim top"></div>
					<div className="inner">
						<HeroInfo />
						<HeroMedia />
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero