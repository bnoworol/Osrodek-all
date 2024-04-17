import './post.css';
import { useQuery } from '@apollo/client';
import { CONTENT_MIN_POST_QUERY } from '../../api';
import { useState } from 'react';
import SmallGallery from '../smallGallery/SmallGallery';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';
import SinglePostPage from '../../pages/singlePost/SinglePostPage';

export function Post() {
	const { slugId1 } = useParams();
	const [imgUrl, setImgUrl] = useState('');
	const [visible, setVisible] = useState(false);
	const [postC, setPostC] = useState(null)
	const [postT, setPostT] = useState(null)
	let { data, loading, error } = useQuery(CONTENT_MIN_POST_QUERY);
	if (loading) return <Loading/>;
	if (error) return <pre>{error.message}</pre>;
	const arr = data.posts.nodes;
	let postsContent;
	let postsTitle;
	arr.forEach(el => {
		if (window.location.pathname.includes(el.slug)) {
			postsContent = el.content;
			postsTitle = el.title;
		}
	});

	return (
		<div
			className="single_post"
			onClick={e => {
				setImgUrl(e.target.src);
				setVisible(!visible);
			}}>
			<h1 className="title">{postsTitle}</h1>
			{/* <div className="content" dangerouslySetInnerHTML={{ __html: postsContent }}></div> */}
			<SinglePostPage dataString={postsContent}/>
			{/* <SmallGallery imgUrl={imgUrl} visible={visible} /> */}
			
		</div>
	);
}
export default Post;
