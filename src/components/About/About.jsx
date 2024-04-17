import './About.css';
import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import Gallery from '../Gallery/Gallery';
import SingleItem from './SingleItem';
export default function About() {
	const [data, setData] = useState(undefined);
	let api = 'http://localhost:3000/graph/about';
	useEffect(() => {
		async function getdata() {
			const request = fetch(api);
			const response = await request;
			const parsed = await response.json();
			// console.log(parsed);
			setData(parsed.data.allONas.nodes);
			// const lengs = parsed.data.slice(0, 9);
			// setLeng(lengs.length);
	
		}

		getdata();
	}, []);
	if (data === undefined) {
		return <Loading />;
	} else {
		return (
			<>
				<section className="about seconds-bg all-bg">
					<p>O nas</p>
					<div
						className="about_items"
						// onClick={handleToggle}
					>
						{data.map((item, index) => (
							<SingleItem
								key={index}
								HREF={`/page/${item.slug}?id=GALERIA`}
								TITLE={item.title}
								SRC={item.featuredImage.node.sourceUrl}
								ALT={item.featuredImage.node.altText}
								CONTENT={item.content}
								index={index}
							/>
						))}
					</div>
				</section>
			</>
		);
	}
}
