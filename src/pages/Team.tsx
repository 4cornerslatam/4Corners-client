// import Slider from 'react-slick';
import { ButtonToServices } from '../components/ButtonToServices/ButtonToServices';
import data from '../translation/spanish.json';
import { MembersCard } from '../components/MembersCard/MembersCard';

const Team = (): JSX.Element => {
	const team = data.team;
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
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
			<div className='carousel'>
				{/* <Slider {...settings}> */}
				<div>
					<MembersCard memberId='1' />
					<MembersCard memberId='2' />
					<MembersCard memberId='3' />
					<MembersCard memberId='4' />
				</div>
				{/* </Slider> */}
			</div>
		</section>
	);
};

export { Team };
