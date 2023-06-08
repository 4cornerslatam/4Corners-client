// carrusel 7
import { useState, useRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import data from '../../translation/spanish.json';

const CarouselComponent = () => {
    const [index, setIndex] = useState(0);
    const length = 4;
    const items = data.aboutUs.VALUES;
    const carouselRef = useRef(null);

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <div className='carousel'>
            <div className='carousel-wrapper' ref={carouselRef}>
                <div className='carousel-content'>
                    <div className='carousel-title'>
                        <SwitchTransition mode='out-in'>
                            <CSSTransition
                                key={items[index].id}
                                classNames={{
                                enter: 'fade-enter',
                                enterActive: 'fade-enter-active',
                                exit: 'fade-exit',
                                exitActive: 'fade-exit-active',
                                }}
                                timeout={300}
                            >
                                <h1>{items[index].title}</h1>
                            </CSSTransition>
                        </SwitchTransition>
                    </div>
                    <div className='carousel-description'>
                    <SwitchTransition mode='out-in'>
                        <CSSTransition
                            key={items[index].id}
                            classNames={{
                            enter: 'fade-enter',
                            enterActive: 'fade-enter-active',
                            exit: 'fade-exit',
                            exitActive: 'fade-exit-active',
                            }}
                            timeout={300}
                        >
                            <p>{items[index].description}</p>
                        </CSSTransition> 
                    </SwitchTransition>  
                </div>
            </div>      
        </div>
        <button onClick={()=>handleNext()}>
                <FontAwesomeIcon icon={faChevronRight} fade style={{ color: "#c54f81", }} />
            </button>
    </div>
  );
};

export default CarouselComponent;
