import { ButtonToServices } from '../components/ButtonToServices/ButtonToServices'
import CarouselComponent from '../components/Carousel/Carousel'
import data from '../translation/spanish.json'

const About = (): JSX.Element => {
    const about = data.aboutUs
    
    return (
        <div className='about'>
            <section className='about-info'>
                <div className='title'>
                    <h1>{about.TITLE.titleLine1}</h1>
                    <h1>{about.TITLE.titleLine2.toLocaleLowerCase()}</h1>
                </div>
                <div className='description'>
                    <p>{about.DESCRIPTION}</p>
                </div>
                <div className='button'>
                    <ButtonToServices />
                </div>
            </section>
            <section className='about-values'>
                {/*<section className='title'>
                     {about.VALUES.map((item) => {
                        return (
                             <div>
                                <h2>{item.title}</h2>
                                <section className='description'>
                                    <p>{item.description}</p>
                                    <figure className='icon'>
                                        <img alt='nav'/>
                                    </figure>
                                </section>
                            </div> 
                        )
                    })} 
                   
                </section>*/}
                <CarouselComponent />
                


            </section>
        </div>
    )
}

export { About }