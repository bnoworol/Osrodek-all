import './footer.css';
import IMG from '../../assets/Logo_LZS_RGB.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';
import { Link } from 'react-router-dom';
export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="example-3">
			<div className="container main-content-area">
				<div className="holder">
					<h3>Dolnośląskie Zrzeszenie Ludowe Zespoły Sportowe</h3>
					<ul>
						<li>
							<p></p>
						</li>
						<li>
							<p>ul. Kolejowa 36/1a</p>
						</li>
						<li>
							<p>53-508 Wrocław</p>
						</li>
						<li>
							<p>tel. 71 339 79 15</p>
						</li>
						<li>
							<p>e-mail: dzlzs@lzs.info.pl / lzs@lzs.info.pl</p>
						</li>
					</ul>
				</div>
				<div className="holder">
					<h3>
						Ośrodek LZS <br />
						<q>JAGNA</q>
					</h3>
					<ul>
						<li>
							<p></p>
						</li>
						<li>
							<p>Nowa Bystrzyca 74</p>
						</li>
						<li>
							<p>57-500 Bystrzyca Kłodzka</p>
						</li>
						<li>
							<p>woj. dolnośląskie</p>
						</li>
						<li>
							<p>e-mail: osrodek@lzs.info.pl</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="container social-media-links">
				<ul>
					<li>
						<a target='_blank' href="https://www.facebook.com/osrodeklzs/">
							<FacebookIcon />
						</a>
					</li>
					<li>
						<a target='_blank' href="https://lzs.info.pl/">
							{/* <LinkIcon /> */}
							<img style={{ borderRadius: '50%' }} src={IMG} alt="logo" />
						</a>
					</li>
					<li>
						<a target='_blank' href="https://www.instagram.com/jagnalzs/">
							<InstagramIcon />
						</a>
					</li>
				</ul>
			</div>
			<div className="copyright">
				{/* <a href="#">
					<img style={{ borderRadius: '50%', width: '80px', margin: '20px' }} src={IMG} alt="logo" />
				</a> */}
				<p style={{ paddingBottom: '20px' }}>Copyright © {year} - DZ LZS</p>
				<ul>
					<li>
						<a href="#">Polityka Prywatności</a>
					</li>
					<li>
						<a href="#">Regulamin</a>
					</li>
					<li>
						<a href="#">RODO</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
