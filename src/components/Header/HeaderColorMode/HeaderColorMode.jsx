import useColorMode from '../../../hooks/useColorMode';

const HeaderColorMode = () => {
	const [colorMode, handleColorMode] = useColorMode();

	return (
		<div className="color-mode" onClick={handleColorMode}>
			{colorMode ? (
				<svg className='icon moon' width="30" height="30">
					<use xlinkHref="#icon-moon-line" />
				</svg>
			) : (
				<svg className='icon sun' width="30" height="30">
					<use xlinkHref="#icon-sun-line" />
				</svg>
			)}
		</div>
	);
};

export default HeaderColorMode;
