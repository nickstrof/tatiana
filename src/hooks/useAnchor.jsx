import { useEffect } from 'react';

const useAnchor = () => {
	useEffect(() => {
		const htmlBody = document.querySelector('html, body');
		const anchors = document.querySelectorAll('a[href^="#"]');
		const header = document.querySelector('.header');
	
		const handleAnchorClick = (e) => {
			e.preventDefault();
			const targetId = e.target.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);
		
			if (targetElement) {
				const headerHeight = header ? header.offsetHeight : 0;
				const targetOffsetTop = targetElement.offsetTop - headerHeight;
		
				htmlBody.style.scrollBehavior = 'smooth';
				window.scrollTo({
				top: targetOffsetTop,
				behavior: 'smooth'
				});
		
				setTimeout(() => {
				htmlBody.style.scrollBehavior = 'auto';
				}, 1500);
			}
		};
	
		anchors.forEach(anchor => {
				anchor.addEventListener('click', handleAnchorClick);
		});
	
		return () => {
				anchors.forEach(anchor => {
				anchor.removeEventListener('click', handleAnchorClick);
				});
		};
	}, []);
	
};

export default useAnchor