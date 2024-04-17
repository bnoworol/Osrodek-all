import './Gallery.css';
import Gym from '../../assets/silownia.webp';
// import Canteen from '../../assets/stolowla.webp';
import ConferenceRoom from '../../assets/konf.webp';
import CommonRoom from '../../assets/bill.webp';
import SportsHall from '../../assets/hala.webp';
import Sauna from '../../assets/sauna.webp';
import Room from '../../assets/pokoj.webp';
import { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
export default function Gallery({ images, galleryClass, setVisible, visible }) {
	const [imageIndex, setImageIndex] = useState(0);
	function showNextImage() {
		setImageIndex(index => {
			if (index === images.length - 1) return 0;
			return index + 1;
		});
	}

	function showPrevImage() {
		setImageIndex(index => {
			if (index === 0) return images.length - 1;
			return index - 1;
		});
	}
	return (
		<div
			className={`gallery-gallery ${galleryClass}`}
			onClick={e => {
				e.target.tagName === 'SECTION' ? setVisible(!visible) : '';
			}}>
			<section
				aria-label="Image Slider"
				style={{
					width: '100vw',
					height: '100vh',
					position: 'relative',
					margin: '0',
					padding: '0',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<div
					style={{
						width: '70%',
						height: '70%',
						display: 'flex',
						overflow: 'hidden',
						paddingBottom: '35px',
						position: 'relative',
					}}>
					{images.map(({ url, alt }, index) => (
						<img
							loading="lazy"
							key={url}
							src={url}
							alt={alt}
							aria-hidden={imageIndex !== index}
							className="img-slider-img-gallery"
							style={{ translate: `${-100 * imageIndex}%`, position: 'relative', width: '100%' }}
						/>
					))}
					<button
						onClick={showPrevImage}
						className="img-slider-btn left"
						style={{ left: 10 }}
						aria-label="View Previous Image">
						<ArrowBigLeft aria-hidden />
					</button>
					<div className='xBtn'
						style={{
							position: 'absolute',
							top: '0',
							right: '0',
							padding: '5px 10px',
							fontSize: '1rem',
							fontWeight: 'bold',
							cursor: 'pointer',
						}}
						onClick={() => {
							setVisible(!visible);
						}}>
						X
					</div>
					<button
						onClick={showNextImage}
						className="img-slider-btn right"
						style={{ right: 10 }}
						aria-label="View Next Image">
						<ArrowBigRight aria-hidden />
					</button>
				</div>

				<div
					style={{
						position: 'absolute',
						bottom: '2.5rem',
						display: 'flex',
						gap: '.25rem',
						zIndex: '5',
						maxWidth: '1280px',
						margin: '0 auto',
					}}>
					{images.map((_, index, url) => (
						<button
							style={{ width: '100px', height: '100px' }}
							key={index}
							className="img-slider-dot-btn-gallery"
							aria-label={`View Image ${index + 1}`}
							onClick={() => setImageIndex(index)}>
							{index === imageIndex ? (
								<img style={{ width: '100%', height: '100%' }} loading="lazy" src={url[index].url} />
							) : (
								<img style={{ width: '100%', height: '100%' }} loading="lazy" src={url[index].url} />
							)}
						</button>
					))}
				</div>
			</section>

			{/* <CircleDot aria-hidden /> */}
		</div>
	);
}
