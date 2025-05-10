import './Skills.css'
import { images } from '../../constants';

const Skills = () => {
	return (
		<div id="skills" className="skills pad">
			<div className="container">

				<div className="wrapper-title anim">
					<h2 className="title">TATIANA'S <span>SKILLS</span></h2>
					<div className="subtitle">“The journey of a thousand miles begins with one step”</div>
				</div>

				<div className="items">
					<div className="item item-first i200-200 anim left">
						<img
							width="700"
							height="700" 
							src={images.img1web} 
							alt="" 
						/>
						<div className="main-title title"> LET'S SEE SOME<br />OF MY SKILLS</div>
					</div>
					<div className="item story i100-100 color1 anim right">
						<h3 className="title">Google ADS</h3>
					</div>
					<div className="item i100-100 anim right">
						<img
							width="700"
							height="700"  
							src={images.img2web} 
							alt="" 
						/>
					</div>
					<div className="item story i100-100 color2 anim right">
						<h3 className="title">Meta ADS</h3>
					</div>
					<div className="item story i100-100 color3 anim right">
						<h3 className="title">Canva</h3>
					</div>
					<div className="item story i100-100 color3 anim left">
						<h3 className="title">Email Marketing</h3>
					</div>
					<div className="item story i100-100 color1 anim left">
						<h3 className="title">Marketing Strategy</h3>
					</div>
					<div className="item i200-100 anim right">
						<img 
							width="840"
							height="440"
							src={images.img3web} 
							alt="" 
						/>
					</div>
					<div className="item i200-100 anim left">
						<img 
							width="840"
							height="440"
							src={images.img4web} 
							alt="" 
						/>
					</div>
					<div className="item story i100-100 color2 anim right">
						<h3 className="title">Content Marketing</h3>
					</div>
					<div className="item story i100-100 color3 anim right">
						<h3 className="title">Social Media Marketing</h3>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Skills