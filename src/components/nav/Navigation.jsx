import Loading from '../Loading/Loading';
import { createBrowserHistory } from '@remix-run/router';
import { useEffect, useState } from 'react';
import useSize from '../../hooks/useSize';
import arrowDown from '../../assets/down-arrow.svg';
import LOGO from '../../assets/home/jagna_logo.png';
import './navMobile.css';
import './nav.css';
import NavDesktop from './navDesktop';
import NavMobile from './navMobile';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
	const windowSize = useSize();
	const [allNav, setAllNav] = useState(undefined);
	const [active, setActive] = useState(false);
	const [menu_class, setMenuClass] = useState('menu hiddens');
	const [translate, setTranslate] = useState(-150);
	const [isOpen, setIsOpen] = useState(false);
	const history = createBrowserHistory();
	const body = document.body;
	const windowSizeStay = innerWidth;
	function push(e) {
		if (window.location.pathname.includes('/aktualnosci')) {
			history.push('/');
		}
	}
	let apiURL = 'https://api.devstation.pl/graph/nav';
	let apiURLdev = 'http://localhost:3000/graph/nav';
	useEffect(() => {
		async function getData() {
			const request = fetch(apiURLdev);
			const response = await request;
			const parsed = await response.json();
			setAllNav(parsed.data.pages.nodes);
		}
		getData();
	}, []);
	if (allNav === undefined) {
			return(
		<div>
			<Outlet/>
			{/* <Loading /> */}
		</div>
			)
	} else {
		if (windowSizeStay <= 800) {
			return (
				<>
					<NavMobile
						allNav={allNav}
						setMenuClass={setMenuClass}
						setTranslate={setTranslate}
						translate={translate}
						menu_class={menu_class}
						arrowDown={arrowDown}
						setActive={setActive}
						LOGO={LOGO}
						push={push}
						active={active}
						setIsOpen={setIsOpen}
						isOpen={isOpen}
					/>
					<section
						onClick={e => {
							setActive(false);
							setTranslate(-150);
							setIsOpen(false);
						}}>
						<Outlet />
					</section>
				</>
			);
		} else {
			return (
				<>
					<NavDesktop allNav={allNav} push={push} active={active} arrowDown={arrowDown} setActive={setActive} />
					<section
						onClick={e => {
							setActive(false);
						}}>
						<Outlet />
					</section>
				</>
			);
		}
	}
};
// };

export default Navbar;
