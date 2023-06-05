import { ButtonToServices } from '../components/ButtonToServices/ButtonToServices';
import data from '../translation/spanish.json';

const About = (): JSX.Element => {
	const team = data.team;

	return (
		<section className='team'>
			<div className='team-title'>
				<p className='linea-1'>{team.TITLE.titleLine1}</p>
				<p className='linea-2'>{team.TITLE.titleLine2}</p>
			</div>
			<div className='team-paragraph'>
				<p>{team.DESCRIPTION}</p>
			</div>
			<div className='team-button'>
				<ButtonToServices />
			</div>
		</section>
	);
};

export { About };
