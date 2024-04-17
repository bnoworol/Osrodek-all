import { Link } from 'react-router-dom';
import PositionDesktop from './positionDesktop';
import ArrowDown from './arrowDown';
import IMG from '../../assets/header/logo_osrodek-small.png';
import IMG1 from '../../assets/Logo_LZS_RGB.jpg';
export default function NavDesktop({ allNav, push, active, arrowDown, setActive }) {
	function closeNav() {
		setActive(false);
	}

	return (
		<>
			<nav className="nav" onClick={push}>
				<div
					style={{
						position: 'relative',
					}}
					className="wrapper">
					<Link className='nav_item' onClick={closeNav} to="/">
						Strona Główna
					</Link>
					<Link className='nav_item' onClick={closeNav} to="/aktualnosci/1">
						Aktualności
					</Link>
					<Link className='nav_item' onClick={closeNav} to="/kontakt">
						Kontakt Test
					</Link>
					{allNav.map(items =>
						items.slug === 'menu'
							? items.children.edges.map(items1 => (
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											transition: '0.3s',
											height: '100%',
										}}
										key={items1.node.title}>
										<div
											style={{
												display: 'flex',
												transition: '0.3s',
												height: '100%',
											}}>
											<Link className='nav_item' onClick={closeNav} key={items1.id} to={`/page/${items1.node.slug}`}>
												{items1.node.title}
											</Link>
											{items1.node.children.edges[0] !== undefined ? (
												<ArrowDown item1={items1} setActive={setActive} active={active} arrowDown={arrowDown} />
											) : (
												''
											)}
										</div>
										{items1.node.children.edges[0] !== undefined ? (
											<PositionDesktop close={closeNav} item1={items1} active={active} />
										) : (
											''
										)}
									</div>
							  ))
							: ''
					)}

					{/* {allNav[0].children.edges.map(item1 => (
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								transition: '0.3s',
							}}
							key={item1.node.title}>
							<div
								style={{
									display: 'flex',
									transition: '0.3s',
								}}>
								<Link key={item1.id} to={`/${item1.node.slug}`}>
									{item1.node.title}
								</Link>
								{item1.node.children.edges[0] !== undefined ? (
									<ArrowDown item1={item1} setActive={setActive} active={active} arrowDown={arrowDown} />
								) : (
									''
								)}
							</div>
							{item1.node.children.edges[0] !== undefined ? <PositionDesktop item1={item1} active={active} /> : ''}
						</div>
					))} */}
					<Link style={{ position: 'absolute', right: '0', maxWidth: '7%', top: '-16px' }} to={'/'}>
						<img style={{ maxWidth: '100%', borderRadius: '50%' }} to={'/'} src={IMG1} />
					</Link>
				</div>
			</nav>
		</>
	);
}
