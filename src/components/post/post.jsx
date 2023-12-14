import './post.css';
import img1 from '../../assets/klub1.jpg';
import img2 from '../../assets/klub3.jpg';
import img3 from '../../assets/klub5.jpg';
export function Posts() {
	const title = ['lecimy', 'w', 'chuj', 'jasne'];
	const content = [
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illo ipsam quasi, repellendus eos nobis maxime quo, quas quam ab itaque placeat quibusdam enim quae cumque?',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illo ipsam quasi, repellendus eos nobis maxime quo, quas quam ab itaque placeat quibusdam enim quae cumque?',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illo ipsam quasi, repellendus eos nobis maxime quo, quas quam ab itaque placeat quibusdam enim quae cumque?',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illo ipsam quasi, repellendus eos nobis maxime quo, quas quam ab itaque placeat quibusdam enim quae cumque?',
	];
	const thumbnail = [
		'https://lzs.info.pl/wp-content/uploads/2023/12/klub16-Copy.jpg',
		'https://lzs.info.pl/wp-content/uploads/2023/12/klub5-Copy.jpg',
		'https://lzs.info.pl/wp-content/uploads/2023/12/klub6-Copy.jpg',
	];
	let cost;
	let posts = [];
	for (let i = 0; i < title.length; i++) {
		if (thumbnail[i] === undefined) {
			thumbnail[i] = 'http://lzs.info.pl/wp-content/uploads/2023/01/fb_tb.png';
		} else {
			thumbnail[i] = thumbnail[i];
		}
		posts.push(
			<div key={i} class='post'>
				<img src={thumbnail[i]} alt='thumbnail' className='post_thumbnail'></img>
				<div className='post_content'>
					<h2 className='post_title'>{title[i]}</h2>
					<p className='post_content_text'>{content[i]}</p>
				</div>
			</div>
		);
	}
	return <div className='posts'>{posts}</div>;
}
export default Posts;
