import { useRef } from 'react';
import './FormTest.css';
export default function FormTest() {
	const firstName = useRef(null);
	const lastName = useRef(null);
	const email = useRef(null);
	const choise = useRef(null);
	const msg = useRef(null);

	return (
		// <div className='bodss'>
		<div className="bods">
			<div class="container" style={{ margin: '0 auto' }}>
				<div class="text">Skontakutj się z nami!</div>
				<form action="#">
					<div class="form-row">
						<div class="input-data">
							<input ref={firstName} type="text" required />
							<div class="underline"></div>
							<label for="">First Name</label>
						</div>
						<div class="input-data">
							<input ref={lastName} type="text" required />
							<div class="underline"></div>
							<label for="">Last Name</label>
						</div>
					</div>
					<div class="form-row">
						<div class="input-data">
							<input ref={email} type="text" required />
							<div class="underline"></div>
							<label for="">Email Address</label>
						</div>
						<div class="input-data">
							<select ref={choise} type="select" required>
								<option value="null" disabled selected>
									--Wybierz powód kontaktu--
								</option>
								<option value="Oferta">Oferta</option>
								<option value="Kontakt">Kontakt</option>
							</select>
						</div>
					</div>
					<div class="form-row">
						<div class="input-data textarea">
							<textarea ref={msg} rows="8" cols="80" required></textarea>
							<br />
							<div class="underline"></div>
							<label for="">Write your message</label>
							<div class="form-row submit-btn">
								<div class="input-data">
									<div class="inner"></div>
									<input
										onClick={e => {
											e.preventDefault();
											// console.log({
											const allInf = {
												fullName: `${firstName.current.value} ${lastName.current.value}`,
												email: email.current.value,
												choise: choise.current.value,
												msg: msg.current.value,
											};
											// })
											allInf.choise === 'Oferta' ? console.log('Wysłano ofertę!') : console.log('Wysłano wiadomość!');
										}}
										type="submit"
										value="submit"
									/>
								</div>
							</div>
							<br />
						</div>
					</div>
				</form>
			</div>
		</div>
		// </div>
	);
}
