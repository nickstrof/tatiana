const HeroInfoButton = ({ text, anchor }) => {
  	return (
	  	<div className="btns">
			<a className="btn" href={anchor}>{text}</a>
		</div>
  	)
}

export default HeroInfoButton
