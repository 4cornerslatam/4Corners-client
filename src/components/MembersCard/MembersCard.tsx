import data from '../../translation/spanish.json';

const MembersCard = (): JSX.Element => {
	const team = data.team;

	return (
		<section>
			<div className='container'>
				<div className='content'>
					<div className='card'>
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
				</div>
			</div>
		</section>
		// <section className='card-container'>
		// 	<div className='card-up'>
		// 		<a href='https://www.linkedin.com/in/beresdev/' target='_blank'>
		// 			<i className='fa-brands fa-linkedin-in'></i>
		// 		</a>
		// 	</div>

		// 	<div className='card-down'>
		// 		<div className='card-img'></div>

		// 		<p className='card-name'>{team.TEAM[1].name}</p>
		// 		<p></p>
		// 		<button></button>
		// 	</div>
		// </section>
	);
};

export { MembersCard };
