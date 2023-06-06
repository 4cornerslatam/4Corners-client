import Slider from 'react-slick';
import { ButtonToServices } from '../components/ButtonToServices/ButtonToServices';
import data from '../translation/spanish.json';

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
				<Slider {...settings}>
					<div className='slick-slide'>
						<div>
							<span>
								<a
									href='http://linkedin.com/company/4corners-coding-dreams'
									target='_blank'>
									<i className='fa-brands fa-linkedin-in' style={{ color: 'white' }}></i>
								</a>
							</span>
							<img />
						</div>
						<div>
							<p></p>
							<p></p>
							<button></button>
						</div>
					</div>
				</Slider>
			</div>
		</section>
	);
};

export { Team };
