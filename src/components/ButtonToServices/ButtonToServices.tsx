import { useNavigate } from 'react-router-dom';

const ButtonToServices = (): JSX.Element => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/services');
	};

	return (
		<button className='button-services' onClick={handleClick}>
			<p>Saber +</p>
		</button>
	);
};

export { ButtonToServices };
