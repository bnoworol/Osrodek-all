import { Link } from 'react-router-dom';
export default function PositionMobile({ item1, active, close }) {
	return (
		<div
			className="positions-mobile"
			key={item1.node.id}
			// className={active ? 'active1' : 'hidden1'}
			style={
				active
					? { height: `${item1.node.children.edges.length * 44}px`, overflow: 'hidden' }
					: { height: '0px', overflow: 'hidden' }
			}>
			{item1.node.children.edges.map(item2 =>
				item2 !== undefined ? (
					<Link onClick={close}
						style={{
							fontSize: '16px',
							padding: '10px',
						}}
						key={item2.node.id}
						to={`/page/${item2.node.slug}`}>
						{item2.node.title}
					</Link>
				) : (
					''
				)
			)}
		</div>
	);
}
