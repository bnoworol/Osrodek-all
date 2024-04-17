import About from '../../components/About/About';
import MyApp from '../../components/Calendar/Calendar';
import Form from '../../components/FacebookApi/Form';
import Header from '../../components/header/Header';
import HeaderText from '../../components/HeaderText/HeaderText';
import Opinions from '../../components/Opinion/Opinions';

import './home.css';
export default function Home() {
	return (
		<>
			<Header />
			{/* <MyApp/> */}
			<div className="home_bg">
				<HeaderText />
				<About />
				<section className='home_section'>
				{/* <div className="home_section-wrapper">
					<MyApp />
					<Form />
				</div> */}
				</section>
				<Opinions />

			</div>
		</>
	);
}
