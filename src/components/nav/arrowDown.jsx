export default function ArrowDown({ arrowDown, setActive, active, item1 }) {
	return (
		<span
			className={active ? 'arrow_img--up' : 'arrow_img--down'}
			key={item1.node.slug}
			style={{
				cursor: 'pointer',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			onClick={() => setActive(!active)}>
			<img
				key={item1.node.title}
				style={{
					width: '15px',
					height: '15px',
				}}
				src={arrowDown}
				alt=""
			/>
		</span>
	);
}
