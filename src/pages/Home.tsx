import { ButtonToServices } from '../components/ButtonToServices/ButtonToServices';
import data from '../translation/spanish.json';

const Home = (): JSX.Element => {
	const home = data.home;

	return (
		<main className='home'>
			<div className='home-title'>
				<p className='linea-1'>{home.TITLE.titleLine1}</p>
				<p className='linea-2'>{home.TITLE.titleLine2}</p>
				<p className='linea-3'>{home.TITLE.titleLine3}</p>
			</div>
			<div className='home-paragraph'>
				<p>{home.DESCRIPTION}</p>
			</div>
			<div className='home-button'>
				<ButtonToServices />
			</div>
		</main>
	);
};

export { Home };
