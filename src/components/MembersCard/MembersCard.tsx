import data from '../../translation/spanish.json';

const MembersCard = (): JSX.Element => {
	const team = data.team;

	return (
		<section>
			<div className='container'>
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
								<button className='button-aboutMe'>Sobre mí</button>
							</div>
						</div>
					</div>
					<div className='card card-back'>
						<div className='card-content-back'>
							<div className='card-icons'>
								<i className='fa-solid fa-xmark'></i>
							</div>
							<div className='card-image'>
								<img src='src/assets/Bere.png' alt='Berenice Hernandez' />
							</div>
							<div className='card-description'>
								<span className='name'>{team.TEAM[0].name}</span>

								<span className='description'>{team.TEAM[0].description}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export { MembersCard };
