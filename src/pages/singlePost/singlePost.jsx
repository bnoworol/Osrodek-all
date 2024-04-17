import Header from '../../components/header/Header';
import Post from '../../components/post/post';
import Wrapper from '../../components/wrapper';
function SinglePost() {
	return (
		<>
			<Header />
			<Wrapper render={Post} />
		</>
	);
}
export default SinglePost;
