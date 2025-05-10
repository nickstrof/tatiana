import { Link } from 'react-router-dom';
import { images } from '../../../constants';
import useLightMode from '../../../hooks/useIsLightMode';

const HeaderSite = () => {
	const isLightMode = useLightMode();
	
	return (
		<div className="site">
			<Link to="/" title="">
				<img
					width="200"
					height="81"
					src={isLightMode ? images.logoLight : images.logo}
					alt="Logo"
				/>
			</Link>
		</div>
	);
};

export default HeaderSite;
