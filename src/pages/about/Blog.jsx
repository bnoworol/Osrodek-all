import { CONTENT_MIN_POST_QUERY } from '../../api';
import Header from '../../components/header/Header';
import { useQuery, gql } from '@apollo/client';
import Loading from '../../components/Loading/Loading';
import Posts from '../../components/post/Posts';
import { useParams } from 'react-router-dom';
function Blog() {
	const {postsID} = useParams()
	const { loading, error, data } = useQuery(CONTENT_MIN_POST_QUERY);
	if (loading) return <Loading />;
	if (error) return <p>Error : {error.message}</p>;
	const dataAll = data.posts.nodes;
	return (
		<>
			<Header />
			<Posts dataAll={dataAll} />
		</>
	);
}

export default Blog;
