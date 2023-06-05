import { useState } from 'react'
import data from '../../translation/spanish.json'

const CarouselComponent = (): JSX.Element => {
    const [index, setIndex] = useState<number>(0);
    const length = 4;
    const items = data.aboutUs.VALUES;
    
    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <div className='carousel'>
            <div className='carousel-title'>
                <h1>{items[index].title}</h1>
            </div>
            <div className='carousel-description'>
                <p>{items[index].description}</p>
                <button onClick={handleNext}>
                    <span>+</span>
                </button>
            </div>
        </div>
    )
}

//https://www.makeuseof.com/react-js-interactive-carousel-build/
export default CarouselComponent