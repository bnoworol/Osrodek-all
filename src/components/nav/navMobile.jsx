import { Link } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
import ArrowDown from './arrowDown';
import PositionMobile from './positionMobile';
import { useState } from 'react';
export default function NavMobile({
	allNav,
	setMenuClass,
	setTranslate,
	translate,
	menu_class,
	arrowDown,
	setActive,
	LOGO,
	push,
	active,
	isOpen,
	setIsOpen,
}) {
	// const [isOpen, setIsOpen] = useState(false);
	function closeNav() {
		setIsOpen(false);
		setTranslate(-150);
		setActive(false)
	}
	return (
		<div style={{ width: '100vh', transition: '.5s' }}>
			<nav
				style={{
					zIndex: '20',
				}}>
				<Hamburger
					toggle={setIsOpen}
					toggled={isOpen}
					onToggle={toggled => {
						if (toggled) {
							setTranslate(0);
						} else {
							setTranslate(-150);
						}
					}}
				/>
				{/* <img
					style={{
						width: '75px',
						height: '75px',
						right: '25px',
						top: '2px',
						position: 'absolute',
						background: '#fff',
						borderRadius: '50%',
						objectFit: 'cover',
					}}
					src={LOGO}
					alt=""
				/> */}
			</nav>
			<div
				onClick={push}
				// className={`${menu_class}`}
				className={isOpen ? 'menu visible' : 'menu hiddens'}
				style={{
					transform: `translate(${translate}%)`,
				}}>
				<Link onClick={closeNav} to="/">
					Strona Główna
				</Link>
				<a onClick={closeNav} href="/aktualnosci/1">
					Aktualności
				</a>
				{allNav.map(items =>
					items.slug === 'menu'
						? items.children.edges.map(items1 => (
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										transition: '0.3s',
									}}
									key={items1.node.title}>
									<div
										style={{
											display: 'flex',
											transition: '0.3s',
										}}>
										<Link onClick={closeNav} key={items1.id} to={`/page/${items1.node.slug}`}>
											{items1.node.title}
										</Link>
										{items1.node.children.edges[0] !== undefined ? (
											<ArrowDown item1={items1} setActive={setActive} active={active} arrowDown={arrowDown} />
										) : (
											''
										)}
									</div>
									{items1.node.children.edges[0] !== undefined ? <PositionMobile close={closeNav} item1={items1} active={active} /> : ''}
								</div>
						  ))
						: ''
				)}
			</div>
		</div>
	);
}
