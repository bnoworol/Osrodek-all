import './smallGallery.css';
export default function SmallGallery({ imgUrl, visible, setVisible }) {
	return (
		<div
			onClick={e => {
				if (visible) {
					setVisible(false);
				}
			}}
			className={`small_gallery ${visible ? 'active' : 'hidden'}`}>
			<img src={imgUrl} alt="" />
		</div>
	);
}
