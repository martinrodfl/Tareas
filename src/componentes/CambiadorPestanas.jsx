import { useState } from 'react';

const CambiadorPestanas = ({ pestanaIds, obtenerEncabezado, children }) => {
	const [idSelecionado, setIdSelecionado] = useState(pestanaIds[0]);
	return (
		<>
			{pestanaIds.map((pestanaId) => (
				<button
					key={pestanaId}
					onClick={() => setIdSelecionado(pestanaId)}
				>
					{obtenerEncabezado(pestanaId)}
				</button>
			))}
			<hr />
			<div key={idSelecionado}>
				<h3>{obtenerEncabezado(idSelecionado)}</h3>
				{children}
			</div>
		</>
	);
};

export default CambiadorPestanas;
