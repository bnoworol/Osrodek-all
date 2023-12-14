import './nav.css';
const navLinkName = ['Strona Główna', 'O nas', 'Kontakt'];
const navLinkHref = ['/', '/about', '/contact'];
export function Navigations() {
	let components = []
	for (let i = 0; i < navLinkName.length; i++) {
		components.push(<a key={i} className='nav_link' href={navLinkHref[i]}>{navLinkName[i]}</a>)
	}
	return (
		<nav className='nav'>
			{components}
		</nav>
	);
}
export default Navigations;
