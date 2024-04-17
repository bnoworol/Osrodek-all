import { Link } from 'react-router-dom';
import './headertext.css';
export default function HeaderText() {
	return (
		<section className="header_text-container">
			<div className="header_wrapper-text">
				<h4>Dolnośląskie Zrzeszenie Ludowe Zespoły Sportowe</h4>
				<h5>we Wrocławiu</h5>
				<h6>
					Nasza oferta skierowana jest przede wszystkim do zespołów
					sportowych, grup szkolnych, firmowych wyjazdów integracyjnych oraz innych zorganizowanych grup, poszukujących
					doskonałego miejsca do szkolenia, rekreacji i wypoczynku.
				</h6>
				<p>
					W naszym ośrodku znajdziecie doskonałe warunki do aktywnego wypoczynku oraz profesjonalne zaplecze
					szkoleniowe. Oferujemy bogaty wybór atrakcji, takich jak hale sportową, saunę boiska do różnych dyscyplin
					sportowych oraz wiele innych udogodnień.
				</p>
				<p>
					Jesteśmy gotowi sprostać Waszym potrzebom i zapewnić niezapomniane doświadczenie pobytu w naszym ośrodku.
					Serdecznie zapraszamy do zapoznania się z naszą <Link className='link' to='/page/oferta'>ofertą</Link> i kontaktu z nami w celu uzyskania szczegółowych
					informacji oraz rezerwacji terminu.
				</p>
				<p>Do zobaczenia!</p>
				<p>Zarząd DZ LZS we Wrocławiu</p>
			</div>
		</section>
	);
}
