import { useEffect } from 'react';

const useInViewport = () => {
	const isInViewport = (element) => {
		const elementTop = element.getBoundingClientRect().top;
		const viewportBottom = window.innerHeight * 0.9;
		return elementTop < viewportBottom;
	};

	const handleScrollAndResize = () => {
		const animElements = document.querySelectorAll('.anim');
		animElements.forEach((element) => {
		if (isInViewport(element)) {
			element.classList.add('visible');
		}
		});
	};

	useEffect(() => {
		handleScrollAndResize();

		window.addEventListener('scroll', handleScrollAndResize);
		window.addEventListener('resize', handleScrollAndResize);
		window.addEventListener('load', handleScrollAndResize);

		return () => {
		window.removeEventListener('scroll', handleScrollAndResize);
		window.removeEventListener('resize', handleScrollAndResize);
		window.removeEventListener('load', handleScrollAndResize);
		};
	}, []);
};

export default useInViewport;