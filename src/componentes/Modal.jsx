import { useState, useContext } from 'react';

import LanguageContext from '../context/LanguageContext';

import '../css/Modal.css';

const Modal = ({ children, titulo, onConfirm, onCancel, isOpen, tareaId }) => {
	const { texts } = useContext(LanguageContext);

	const [showModal, setShowModal] = useState(isOpen);

	const manejarCierreModal = () => {
		setShowModal(false);
		onCancel();
	};

	const manejarConfirmacion = () => {
		onConfirm(tareaId);
		setShowModal(false);
	};

	return (
		<>
			{showModal && (
				<div className='modal-capa'>
					<div className='modal-contenido'>
						<div className='modal-header'>
							<h3>{titulo}</h3>
							<button
								className='boton-cerrar'
								onClick={manejarCierreModal}
							>
								&times;
							</button>
						</div>
						<div className='modal-body'>{children}</div>
						<div className='modal-footer'>
							<button
								className='boton-cancelar'
								onClick={manejarCierreModal}
							>
								{texts.cancelButton}
							</button>
							<button
								className='boton-eliminar'
								onClick={manejarConfirmacion}
							>
								{texts.confirmButton}
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
