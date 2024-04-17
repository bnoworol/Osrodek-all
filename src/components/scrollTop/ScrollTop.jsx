import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
	// Extracts pathname property(key) from an object
	const { pathname } = useLocation();
	// Automatically scrolls to top whenever pathname changes
	useEffect(() => {
		const newPathname = pathname.split('/');
		if (pathname + location.search == `/page/${newPathname[2]}?id=GALERIA`) {
			const body = document.body;
			const gall = body.querySelector('.testowo');
			gall.scrollIntoView();
		} else {
			setTimeout(() => {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			}, 0);
		}
	}, [pathname]);
};

export default ScrollToTop;
