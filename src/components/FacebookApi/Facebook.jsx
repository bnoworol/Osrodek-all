// FB.api(
// 	'https://graph.facebook.com/v18.0/593339847377237/ratings?access_token=EAAVM7cxzS44BOzIYykflPZAW7tugny3rZCHAddjAnSuKZBFm5hwpa4VdnziC2e1gtZBpIZAauAWL5I9nwAjZAAAnKbTqIJRuKMW2ZCv69dt4gCCpPpoVLvwb53wVKgEEfGeHs8Ddiv5uSLixFB5AwPdNrBtIvYJbGqwa8ac53SDctudsPXwQZCAonWJaClmwo6AFXZA31GD3YGdbkTlOSwI54bXEk',
// 	'GET',
// 	{},
// 	function Facebooks(response) {
// 		// console.log(...response.data);
// 		const data = [...response.data];
// 	}
// );

// return '';
// const response = await fetch(
// 	'https://graph.facebook.com/v18.0/593339847377237/ratings?access_token=EAAVM7cxzS44BOzIYykflPZAW7tugny3rZCHAddjAnSuKZBFm5hwpa4VdnziC2e1gtZBpIZAauAWL5I9nwAjZAAAnKbTqIJRuKMW2ZCv69dt4gCCpPpoVLvwb53wVKgEEfGeHs8Ddiv5uSLixFB5AwPdNrBtIvYJbGqwa8ac53SDctudsPXwQZCAonWJaClmwo6AFXZA31GD3YGdbkTlOSwI54bXEk'
// );
// const movies = await response.json();
// // console.log(movies);

// console.log(movies);

import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
// import './face.css';
// import './face1.css';
import Form from './Form';
import IMG from '../../assets/header/1.webp';
function Facebooks() {
	const [joke, setJoke] = useState(undefined);
	const [leng, setLeng] = useState(0);
	let api = import.meta.env.VITE_FACEBOOK_URL;
	let api1 = 'http://localhost:3000/face';
	let api2 = 'http://vps-60f31005.vps.ovh.net/face';
	let api3 = 'https://api.devstation.pl/posts';
	useEffect(() => {
		async function getdata() {
			const request = fetch(api3);
			const response = await request;
			const parsed = await response.json();
			console.log(parsed);
			// setJoke(parsed.data);
			// const lengs = parsed.data.slice(0, 9);
			// setLeng(lengs.length);
		}

		getdata();
	}, []);
	const HTML = document.querySelector('html');
	if (leng === 4) {
		HTML.style.setProperty('--main--translate', '-163%');
	} else if (leng === 5) {
		HTML.style.setProperty('--main--translate', '-196%');
	} else if (leng === 6) {
		HTML.style.setProperty('--main--translate', '-230%');
	} else if (leng === 7) {
		HTML.style.setProperty('--main--translate', '-253%');
	} else if (leng === 8) {
		HTML.style.setProperty('--main--translate', '-276%');
	} else if (leng === 9) {
		HTML.style.setProperty('--main--translate', '-200%');
		HTML.style.setProperty('--animation-duration', '15s');
	}

	setTimeout(() => {
		const parentMarquee = document.querySelector('.marquee-wrapper');
		const childMarquee = document.querySelector('.marquee-content');
		// will clone the child node of Parent Marquee or copy the sibling
		const adChildMarquee = document.querySelector('.marquee-content').cloneNode(true);
		parentMarquee.appendChild(adChildMarquee);
		// code below will allow a draggable feature for the marquee carousel
		const ulParentListContainer = document.querySelector('.marquee-wrapper');
		let isDragging = false;
		const dragStart = e => {
			if (!isDragging) return;
			ulParentListContainer.scrollLeft -= e.movementX;
		};
		const stopDragging = () => {
			isDragging = false;
		};
		// when mouse is pressed
		ulParentListContainer.addEventListener('mousedown', () => (isDragging = true));
		// when mouse is move to left
		ulParentListContainer.addEventListener('mousemove', dragStart);
		// when mouse pressed is released
		window.addEventListener('mouseup', stopDragging);
	}, 1);
	if (joke !== undefined && leng !== 0) {
		return <Loading />;
	} else {
		return (
			<>
				<h1>OPINIE</h1>
				<section className="container mb-5">
					<div className="marquee-wrapper" style={{ userSelect: 'none' }}>
						<div className="marquee-content scrollingX">
							<div className="card-testimonial">
								<article>
									<picture>
										<source src={IMG} />
										<img src={IMG} alt="sample-one.jpeg" />
									</picture>
									<h4>SIMPLE</h4>
									<article className="short-description">
										<p>
											Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, nesciunt. Optio omnis ducimus
											autem aperiam incidunt quae harum cumque animi suscipit dolor cupiditate culpa, doloremque dolorem
											voluptas qui dignissimos repellat.
										</p>
									</article>
								</article>
							</div>
							<div className="card-testimonial">
								<article>
									<picture>
										<source src={IMG} />
										<img src={IMG} alt="sample-one.jpeg" />
									</picture>
									<h4>SIMPLE</h4>
									<article className="short-description">
										<p>
											Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, nesciunt. Optio omnis ducimus
											autem aperiam incidunt quae harum cumque animi suscipit dolor cupiditate culpa, doloremque dolorem
											voluptas qui dignissimos repellat.
										</p>
									</article>
								</article>
							</div>
							<div className="card-testimonial">
								<article>
									<picture>
										<source src={IMG} />
										<img src={IMG} alt="sample-one.jpeg" />
									</picture>
									<h4>SIMPLE</h4>
									<article className="short-description">
										<p>
											Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, nesciunt. Optio omnis ducimus
											autem aperiam incidunt quae harum cumque animi suscipit dolor cupiditate culpa, doloremque dolorem
											voluptas qui dignissimos repellat.
										</p>
									</article>
								</article>
							</div>
							<div className="card-testimonial">
								<article>
									<picture>
										<source src={IMG} />
										<img src={IMG} alt="sample-one.jpeg" />
									</picture>
									<h4>SIMPLE</h4>
									<article className="short-description">
										<p>
											Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, nesciunt. Optio omnis ducimus
											autem aperiam incidunt quae harum cumque animi suscipit dolor cupiditate culpa, doloremque dolorem
											voluptas qui dignissimos repellat.
										</p>
									</article>
								</article>
							</div>
						</div>
					</div>
				</section>

				{/* <div
					className="opinion-container-test"
					style={{
						display: 'flex',
						width: '815px',
						overflow: 'hidden',
						margin: '0 auto',
						alignItems: 'center',
						gap: '25px',
					}}>
					{joke.slice(0, 9).map(item => (
						<div
							onClick={() => {
								HTML.style.setProperty('--left-main', '-300px');
							}}
							key={item.created_time}
							className={`opinion_one ${leng > 3 ? 'animations' : ''}`}
							style={{
								width: '250px',
								flexShrink: '0',
							}}>
							<img
								className="padd opinion_one--img"
								src="https://www.facebook.com/images/fb_icon_325x325.png"
								alt="profile picture"
							/>
							<q className="padd opinion_one--content">{item.review_text}</q>

							<div className="opinion_one--star">
								{item.rating !== undefined ? (
									<img
										className="opinion_one--star--img"
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjTtS05jIMTJzQMsVMFKLdYXxjQQmSzBUQ3w&usqp=CAU"
										alt="star picture test"
									/>
								) : (
									<p style={{ color: 'black' }} className="opinion_one--star--img">
										{item.recommendation_type}
									</p>
								)}
							</div>
						</div>
					))}
				</div> */}
				{/* <form action="" method="POST">
					<input type="submit" value="Wyślij!" />
				</form> */}
				<Form />
			</>
		);
	}
}

export default Facebooks;
