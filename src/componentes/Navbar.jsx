import '../css/Navbar.css';
const Navbar = (props) => {
	return (
		<div className='Nav'>
			<h1>Tareas Simples</h1>
			<div className='switch-container'>
				<label className='switch'>
					<input
						type='checkbox'
						checked={props.modoDark}
						onChange={props.cambiarModo}
					/>
					<span className='slider'></span>
				</label>
				{/* Resto de tu contenido */}
			</div>
		</div>
	);
};

export default Navbar;
