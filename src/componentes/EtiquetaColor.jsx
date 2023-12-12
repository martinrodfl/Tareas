const EtiquetaColor = ({ tipo, texto, cantidad }) => {
	return (
		<p
			className={
				tipo === 'totales'
					? 'totales'
					: tipo === 'incompletas'
					? 'incompletas'
					: 'completadas'
			}
		>
			{texto} : {cantidad}
		</p>
	);
};

export default EtiquetaColor;
