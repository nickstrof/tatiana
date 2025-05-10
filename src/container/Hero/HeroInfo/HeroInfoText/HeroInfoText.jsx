const HeroInfoText = ({ maintext, minitext, moto }) => {
  	return (
		<>
			<p>{maintext}</p>
			<p><strong>{minitext}</strong></p>
			<p>{moto}</p>	  
		</>
	)
}

export default HeroInfoText
