import Form from '../../components/FacebookApi/Form';
import Header from '../../components/header/Header';
import Accordeon from '../../components/Accordeon/Accordeon';
import MapContact from '../../components/Maps/MapContact';
import HeaderPage from '../../components/header/HeaderPage/HeaderPage';
import FormTest from '../../components/Form/FormTest';

function Contact() {
	return (
		<>
			{/* <Header /> */}
			<HeaderPage title="CONTACT US" URL={'https://cdn.pixabay.com/photo/2022/01/06/11/44/envelopes-6919301_1280.jpg'} />
			<div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						flexDirection: 'row',
						maxWidth: '1280px',
						margin: '0 auto',
					}}>
					<FormTest/>
					<Form/>
				</div>
				<MapContact />
			</div>
		</>
	);
}
export default Contact;
