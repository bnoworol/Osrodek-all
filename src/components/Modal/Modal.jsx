import './modal.css'
export default function Modal(classActive) {
	return (
		<div className={`modal_container ${classActive.classActive ? 'active' : 'hidden'}`}>
			<p className="modal_container-text">Naciśnij na wybrany dzień a pokaże się ilość pozostałych miejsc!</p>
		</div>
	);
}
