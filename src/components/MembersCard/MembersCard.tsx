import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import data from '../../translation/spanish.json';

const MembersCard = (): JSX.Element => {
	const [flip, setFlip] = useState(false);
	const team = data.team;

	return (
		<section>
			<ReactCardFlip isFlipped={flip} flipDirection='horizontal'>
				<div className='card card-front'>
					<div className='content'>
						<div className='card-content'>
							<div className='card-image'>
								<img src='src/assets/Bere.png' alt='Berenice Hernandez' />
							</div>
							<div className='card-icons'>
								<a href='https://www.linkedin.com/in/beresdev/' target='_blank'>
									<i className='fa-brands fa-linkedin-in'></i>
								</a>
							</div>
							<div className='card-name'>
								<span className='name'>{team.TEAM[0].name}</span>
								<span className='profession'>{team.TEAM[0].subtitle1}</span>
							</div>
							<div className='card-button'>
								<button className='button-aboutMe' onClick={() => setFlip(!flip)}>
									Sobre mí
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='card card-back'>
					<div className='card-content-back'>
						<button className='card-icons' onClick={() => setFlip(!flip)}>
							<i className='fa-solid fa-xmark'></i>
						</button>
						<div className='card-image'>
							<img src='src/assets/Bere.png' alt='Berenice Hernandez' />
						</div>
						<div className='card-description'>
							<span className='name'>{team.TEAM[0].name}</span>
							<span className='description'>{team.TEAM[0].description}</span>
						</div>
					</div>
				</div>
			</ReactCardFlip>
		</section>
	);
};

export { MembersCard };
