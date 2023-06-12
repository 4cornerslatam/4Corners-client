// import Slider from 'react-slick';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ButtonToServices } from '../components/ButtonToServices/ButtonToServices';
import data from '../translation/spanish.json';
import { MembersCard } from '../components/MembersCard/MembersCard';

const Team = (): JSX.Element => {
	const team = data.team;

	return (
		<div className='team'>
			<section className='team-info'>
				<div className='team-title'>
					<h1 className='team-title-linea-1'>{team.TITLE.titleLine1}</h1>
					<h1 className='team-title-linea-2'>{team.TITLE.titleLine2}</h1>
				</div>
				<div className='team-paragraph'>
					<p>{team.DESCRIPTION}</p>
				</div>
				<div className='team-button'>
					<ButtonToServices />
				</div>
			</section>
			<section className='team-people'>
				<div className='team-members desktop'>
					<MembersCard memberId='1' />
					<MembersCard memberId='2' />
					<MembersCard memberId='3' />
					<MembersCard memberId='4' />
				</div>
				<div className='team-members mobile'>
					<Carousel swipeable={true}>
						<MembersCard memberId='1' />
						<MembersCard memberId='2' />
						<MembersCard memberId='3' />
						<MembersCard memberId='4' />
					</Carousel>
				</div>
			</section>
		</div>
	);
};

export { Team };
