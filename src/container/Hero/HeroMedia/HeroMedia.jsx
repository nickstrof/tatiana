import { images } from '../../../constants';

const HeroMedia = () => {
  return (	
	<div className="media anim">
		<div className="wrapper-perfil">
			<div className="circle clr-1"></div>
			<div className="circle clr-2"></div>
			<div className="circle clr-3"></div>
			<div className="circle clr-4">
				<img 
					width="860"
					height="913"
					src={images.tatianaweb}
					alt="Tatiana Charalampidou" 
				/>
			</div>
		</div>
	</div>	  
  )
}

export default HeroMedia