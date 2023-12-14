import './post.css'
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
    const thumbnail = ['klub1.jpg','../../assets/klub3.jpg','../../assets/klub5.jpg']
	let posts = [];
	for (let i = 0; i < title.length; i++) {
		posts.push(
			<div key={i} class='post'>
				<img src={img1} alt='thumbnail' className='post_thumbnail'></img>
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
