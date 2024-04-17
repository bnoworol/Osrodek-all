import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Opinions.css';
import { Autoplay } from 'swiper/modules';
import Loading from '../Loading/Loading';
import OneOpinion from './Opinion';

export default function Opinions() {
	const [data, setData] = useState(undefined);
	const apiURL = '';
	const apiURLdev = 'http://localhost:3000/face';
	useEffect(() => {
		async function getdata() {
			const request = fetch(apiURLdev);
			const response = await request;
			const parsed = await response.json();
			setData(parsed.data);
		}

		getdata();
	}, []);
	if (data == undefined) {
		return <Loading />;
	} else {
		return (
			<section className="container-sliders">
				<div className="Sliders">
					<Swiper
						slidesPerView={1}
						spaceBetween={10}
						loop={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						breakpoints={{
							'@0:00': {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							'@0:75': {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							'@1:00': {
								slidesPerView: 3,
								spaceBetween: 40,
							},
							'@1:50': {
								slidesPerView: 3,
								spaceBetween: 50,
							},
						}}
						modules={[Autoplay]}
						className="mySwiper">
						{data.map((item, index) =>
							item.review_text != undefined ? (
								<SwiperSlide key={index}>
									<OneOpinion item={item} key={index} />
								</SwiperSlide>
							) : (
								''
							)
						)}
					</Swiper>
				</div>
			</section>
		);
	}
}
