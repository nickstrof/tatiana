import { useState, useEffect } from 'react';

const useColorMode = () => {
	const savedMode = localStorage.getItem('colorMode') === 'true';
	const [colorMode, setColorMode] = useState(savedMode);

	const handleColorMode = () => setColorMode(!colorMode);

  	useEffect(() => {
		if (colorMode) {
			document.body.classList.add('light-mode');
		} else {
			document.body.classList.remove('light-mode');
		}
		localStorage.setItem('colorMode', colorMode);
  	}, [colorMode]);

  return [colorMode, handleColorMode];
};

export default useColorMode;
