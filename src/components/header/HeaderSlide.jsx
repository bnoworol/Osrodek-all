import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function HeaderSlide({ data }) {
	return (
		<div className="header_slide">
			<Swiper
				spaceBetween={0}
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 4500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				className="mySwiper">
				{data.map((item, index) => (
					<SwiperSlide key={index}>
						<img loading='lazy' style={{ width: '100vw', height: '100vh' }} key={index} src={item.url} alt="" />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
