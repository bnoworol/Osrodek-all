import './App.css';
import IMG1 from '../../assets/header/1-small.webp';
import IMG2 from '../../assets/header/2-small.webp';
import IMG3 from '../../assets/header/3-small.webp';
import IMG_LOGO from '../../assets/header/logo_osrodek--small.webp';
import HeaderSlide from './HeaderSlide';
function Header() {
	const IMAGES = [
		{ url: IMG1, alt: 'testowy alt1' },
		{ url: IMG2, alt: 'testowy alt2' },
		{ url: IMG3, alt: 'testowy alt3' },
	];
	return (
		<>
			<header className="header">
				<div
					style={{
						overflow: 'hidden',
						width: '100vw',
						height: '100%',
					}}>
					<HeaderSlide data={IMAGES} />
					<div className="back"></div>
					<div className="header_content" style={{ zIndex: '1' }}>
						<div>
							{/* <img rel='preload' className="header__logo" src={IMG_LOGO} alt="logo LZS OŚRODEK"/> */}
							<h2 rel="preload" className="header--text first">
								OŚRODEK SZKOLENIOWO-SPORTOWY
							</h2>
							<h1 rel="preload" className="header--text name">
								<q>JAGNA</q>
							</h1>
							<h3 rel="preload" className="header--text second">
								w Bystrzycy Kłodzkiej
							</h3>
						</div>
						<a href="#" className="heartbeat">
							SPRAWDŹ TERMINY
						</a>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
