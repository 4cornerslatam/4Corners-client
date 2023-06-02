import { ButtonToServices } from '../components/ButtonToServices/ButtonToServices';
const Home = (): JSX.Element => {
	return (
		<section className='home'>
			<div className='home-title'>
				<p className='linea-1'>Coding</p>
				<p className='linea-2'>For</p>
				<p className='linea-3'>Dreams</p>
			</div>
			<div className='home-paragraph'>
				<p>
					Queremos ser tus aliadas y facilitar tu camino en el mundo digital. Por eso
					nos esforzamos por entender tus necesidades y diseñar soluciones intuitivas
					y accesibles que mejoren la vida de las personas.
				</p>
			</div>
			<div className='home-button'>
				<ButtonToServices />
			</div>
		</section>
	);
};

export { Home };
