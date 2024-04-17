import './headerPage.css';
export default function HeaderPage({ title, URL }) {
	return (
		<header style={{ backgroundImage: `url("${URL}")` }} className="header_page">
			<h1>{title}</h1>
		</header>
	);
}
