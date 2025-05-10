import { useEffect, useState } from 'react';

const useLightMode = () => {
	const [isLightMode, setIsLightMode] = useState(false);

	useEffect(() => {
		const check = () => setIsLightMode(document.body.classList.contains('light-mode'));
		check();

		const observer = new MutationObserver(check);
		observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

		return () => observer.disconnect();
	}, []);

	return isLightMode;
};

export default useLightMode;
