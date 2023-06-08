import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import data from '../../translation/spanish.json';

interface MembersCardProps {
	memberId: string;
}

const MembersCard: React.FC<MembersCardProps> = ({ memberId }) => {
	const [flip, setFlip] = useState(false);
	const team = data.team;
	const member = team.TEAM.find((m) => m.id === memberId);

	if (!member) {
		return null;
	}
	return (
		<section>
			<ReactCardFlip isFlipped={flip} flipDirection='horizontal'>
				<div className='card card-front'>
					<div className='content'>
						<div className='card-content'>
							<div className='card-image'>
								<img src='src/assets/Bere.png' alt={member.name} />
							</div>
							<div className='card-icons'>
								<a href={member.linkedinUrl} target='_blank'>
									<i className='fa-brands fa-linkedin-in'></i>
								</a>
							</div>
							<div className='card-name'>
								<span className='name'>{member.name}</span>
								<span className='profession'>{member.subtitle1}</span>
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
							<span className='name'>{member.name}</span>
							<span className='description'>{member.description}</span>
						</div>
					</div>
				</div>
			</ReactCardFlip>
		</section>
	);
};

export { MembersCard };
