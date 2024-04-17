import { useQuery } from '@apollo/client';
import Loading from '../../components/Loading/Loading';
import { GET_PAGES } from '../../api';
import './OnePage.css';
import Header from '../../components/header/Header';
import SmallGallery from '../../components/smallGallery/SmallGallery';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SinglePostPage from '../singlePost/SinglePostPage';
import HeaderPage from '../../components/header/HeaderPage/HeaderPage';

// import MyApp from '../../components/Calendar';


export function OnePage() {
	const [imgUrl, setImgUrl] = useState('');
	const [visible, setVisible] = useState(false);
	const { loading, error, data } = useQuery(GET_PAGES);

	const { slugId } = useParams();

	if (loading) return <Loading />;
	if (error) return <p>Error : {error.message}</p>;
	
	const allContent = data.pages.nodes;
	const test = [...[allContent.map(item => '/' + item.slug)]];
	for (let i = 0; i < test[0].length; i++) {
		if (`/page${test[0][i]}` === window.location.pathname) {
			return (
				<>
					{/* <Header /> */}
					<HeaderPage
						title={allContent[i].title}
						URL={
							allContent[i].stronaIMG.pageimg != null
								? allContent[i].stronaIMG.pageimg.node.sourceUrl
								: 'https://cdn.pixabay.com/photo/2024/02/23/17/26/clock-8592484_1280.jpg'
						}
					/>
					<main className="main_nav">
						<h1>{allContent[i].title}</h1>
						{/* <p
							onClick={e => {
								if (e.target.classList.contains('attachment-thumbnail')) {
									setImgUrl(e.target.src);
									setVisible(!visible);
								}
							}}
							className="onePage_p"
							dangerouslySetInnerHTML={{ __html: `${allContent[i].content}` }}></p> */}
						{/* <MyApp/> */}
						{/* <SmallGallery imgUrl={imgUrl} visible={visible} setVisible={setVisible} /> */}
						<SinglePostPage dataString={allContent[i].content} />
						
					</main>
				</>
			);
		}
	}
}
export default OnePage;
