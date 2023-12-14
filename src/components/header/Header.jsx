import About from '../../pages/about/about';
import './App.css';
import Navigations from '../nav/nav';

function Header() {
	return (
		<>
			<div class='header'>
				<img
					class='header__logo'
					src='http://osrodek.lzs.info.pl/wp-content/uploads/2017/08/logo_osrodek.png'
					alt='logo LZS OŚRODEK'></img>
				<h1 class='header__text'>Ośrodek Jagna LZS w Nowej Bystrzycy</h1>
			</div>
		</>
	);
}

export default Header;
