import { Link } from 'react-router-dom';
import { discriptions } from './DescData';
import './single.css';
export default function SingleItem({ SRC, ALT, TITLE, CONTENT, ButtonContent, HREF, HREF1, index }) {
	function CheckDisc(item, TITLE, index) {
		if (item.pageTitle == TITLE) {
			return (
				<div key={index}>
					<h2 key={item.title}>{item.title}</h2>
					<ul key={index + index}>
						{item.data.map((item1, index) => (
							<li key={index}>
								<strong key={item1.title}>{item1}</strong>
							</li>
						))}
					</ul>
				</div>
			);
		}
	}
	return (
		<div className="abouts_item">
			<div id="container">
				<div className="product-details">
					<h1 key={TITLE}>{TITLE}</h1>
					<p key={CONTENT} className="information" dangerouslySetInnerHTML={{ __html: CONTENT }} />
					<div key={index} className="control">
						<Link key={index} className="about_btn" to={HREF}>
							Zobacz więcej
						</Link>
					</div>
				</div>

				<div key={SRC} className="product-image">
					<img key={ALT} loading="lazy" src={SRC} alt={ALT} />

					<div key={index} className="info">
						{discriptions[0].data.map((item, index) => CheckDisc(item, TITLE, index))}
					</div>
				</div>
			</div>
		</div>
	);
}
