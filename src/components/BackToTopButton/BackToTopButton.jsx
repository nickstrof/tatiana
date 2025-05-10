import { useEffect, useState } from 'react';
import './BackToTopButton.css';

const BackToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 20) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<button
			className="back-to-top"
			onClick={scrollToTop}
			style={{ display: isVisible ? 'block' : 'none' }}
			aria-label="Back to top"
		>
			<svg width="30" height="30">
				<use xlinkHref="#icon-arrow-top" />
			</svg>
		</button>
	);
};

export default BackToTopButton;
