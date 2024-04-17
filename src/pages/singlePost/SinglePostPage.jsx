import { useState } from 'react';
import Gallery from '../../components/Gallery/Gallery';

export default function SinglePostPage(dataString) {
	const [target, setTarget] = useState(0);
	const [visibleClass, setVisibleClass] = useState(false);
	const [visible, setVisible] = useState(false);
	const indexDataString = dataString.dataString.indexOf('<p>GALERIA</p>');
	const contentDataString = dataString.dataString.substring(0, indexDataString);
	let contentAll;
	if (indexDataString == -1) {
		contentAll = dataString.dataString;
	} else {
		contentAll = contentDataString;
	}
	const replaceContentDataString = contentDataString.replace('\n', '');
	const splitContentDataString = replaceContentDataString.split('<p');
	let contentArray = [];
	splitContentDataString.map(item => {
		// function addedClass(item, index) {
		const deleteContentDataString = item.replace('\n', '').split('<p');
		deleteContentDataString.map(item => {
			const finishContent = item
				.replaceAll(/<\/\w+>/g, '')
				.replace('<hr />', '')
				.replace('&#8211;', '-')
				.replace('&nbsp;', '');
			if (finishContent != '') {
				contentArray.push(finishContent);
			}
		});
		// }
	});

	const galleryDataString = dataString.dataString.split('<p>GALERIA</p>').pop();
	const LINK_DETECTION_REGEX =
		/(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi;

	const linkGalleryDataString = galleryDataString.match(LINK_DETECTION_REGEX);
	const galleryArray = [];
	if (linkGalleryDataString != null) {
		linkGalleryDataString.map((item, index) => {
			if (!item.match('x')) {
				item.replace(' ', '');
				galleryArray.push({ url: item, id: index });
			}
		});
	}

	function addedClass(item, index) {
		if (item.match('<h') && !item.match('<strong>')) {
			return <p key={index} className="head_text">{item.replace(/<\w+\>/g, '').replace('>', '')}</p>;
		} else if (item.match('<strong>') && !item.match('<h')) {
			return <p key={index} style={{ fontWeight: 'bold' }}>{item.replace('<strong>', '').replace('>', '')}</p>;
		} else if (item.match('<strong>') && item.match('<h')) {
			return (
				<p key={index} className="head_text" style={{ fontWeight: 'bold' }}>
					{item.replace('<strong>', '').replace(/<\w+\>/g, '').replace('>', '')}
				</p>
			);
		} else {
			return <p key={index} className="classic_paragraf">{item.replace('>', '')}</p>;
		}
	}

	function contentCheck() {
		if (indexDataString == -1) {
			return <div key={1} dangerouslySetInnerHTML={{ __html: contentAll }} />;
		} else {
			return contentArray.map((item, index) =>
				!item.match('href') ? addedClass(item, index) : <div key={index} dangerouslySetInnerHTML={{ __html: item.replace('>', '') }} />
			);
		}
	}
	return (
		<>
			<h1>CONTENT</h1>
			{contentCheck()}
			{galleryArray == [] ? (
				''
			) : (
				<div>
					<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
					<p className='testowo'>GALERIA</p>
					<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
					{galleryArray.map((item, index) => (
						<img
							onClick={() => {
								setVisible(!visible);
							}}
							key={index}
							src={item.url}
							alt=""
						/>
					))}
				</div>
			)}
			<Gallery
				images={galleryArray}
				visible={visible}
				galleryClass={visible ? 'active' : 'hidden'}
				setVisible={setVisible}
			/>
		</>
	);
}
