import useForm from '../../hooks/useForm';
import { useRef } from 'react';
// import './form.css';
import Loading from '../Loading/Loading';
const FORM_ENDPOINT = 'http://localhost:5000/product/getbill';

const Form = () => {
	const formElement = useRef(null);
	const additionalData = {
		sent: new Date().toISOString(),
	};

	
	const { handleSubmit, status, message } = useForm({
		additionalData,
	});
	
	if (status === 'success') {
		// window.location.pathname = '/wysłane'
		location.href = 'http://localhost:5173/send'
		// return (
		// 	// <>
		// 	// 	<div>Thank you!</div>
		// 	// 	<div>{message}</div>
		// 	// </>
			
		// );
	}

	if (status === 'error') {
		// window.location.pathname = '/przykro'
		return (
			// <>
			// 	<div>Something bad happened!</div>
			// 	<div>{message}</div>
			// </>
			<Loading />
		);
	}

	return (
		<form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
			<div className="pt-0 mb-3">
				<input type="text" placeholder="Your name" name="name" required />
			</div>
			<div className="pt-0 mb-3">
				<input type="email" placeholder="Email" name="email" required />
			</div>
			<div>
				<label htmlFor="Rodo">RODO OK</label>
				<input required type="checkbox" name="Rodo" id="Rodo" />
			</div>
			{status !== 'loading' && (
				<div className="pt-0 mb-3">
					<button type="submit">Send a message</button>
				</div>
			)}
		</form>
	);
};

export default Form;
