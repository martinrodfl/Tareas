import '../css/Logo.css';

const Logo = ({ imagen }) => {
	return (
		<div className='freecodecamp-logo-contenedor'>
			<img
				className='freecodecamp-logo'
				src={imagen}
				alt=''
			/>
		</div>
	);
};

export default Logo;
