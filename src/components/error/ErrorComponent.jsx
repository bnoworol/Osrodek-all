import './error.css'
import errorImage from '../../assets/dino.png'
function ErrorComponent() {
	return (
		<div className="error">
			<h1>ERROR 404</h1>
			<img src={errorImage} alt="DINO" />
			<p>Nic tutaj nie ma... Wszystko zjedzone!</p>
			<div className="cont_btn">
			<a className='go_home' href="/">UCIEKAJ!</a>
			</div>
		</div>
	);
}
export default ErrorComponent;
