import HeroInfoJobTitle from "./HeroInfoJobTitle/HeroInfoJobTitle"
import HeroInfoAuthor from "./HeroInfoAuthor/HeroInfoAuthor"
import HeroInfoText from "./HeroInfoText/HeroInfoText"
import HeroInfoButton from "./HeroInfoButton/HeroInfoButton"

const HeroInfo = () => {
  return (
	<div className="info anim left">
		<HeroInfoJobTitle jobtitle="Digital Marketing Specialist" />
		<HeroInfoAuthor author="Tatiana Charalampidou" />
		<HeroInfoText
			maintext="A young digital marketing professional with strong communication and organisational skills and positive mindset, ready to overcome any challenges in a timely manner. Managing various clients among the pharmaceutical and retail sectors delivering comprehensive marketing strategies to drive sales and customer engagement." 
			minitext="Small steps every day!" 
			moto="This is my Motto!" 
		/>
		<HeroInfoButton anchor="#skills" text="Get Started" />
	</div>
  )
}

export default HeroInfo
