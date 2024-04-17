

function Wrapper(props) {
	return (
		<main  className="wrapper">
			{props.render()}
		</main>
	);
}
export default Wrapper;
// wp-block-image