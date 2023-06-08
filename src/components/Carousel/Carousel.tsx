/* import { useState } from 'react';
import data from '../../translation/spanish.json';
import CarouselCard from '../CarouselCard/CarouselCard';

const CarouselComponent = (): JSX.Element => {
    const [index, setIndex] = useState<number>(0);
    
    const items = data.aboutUs.VALUES;
    const length = 4;

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <>
            <div className="slideshow">
                <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {
                        items.map((item) => {
                            return (
                                <div className='slide'>                               
                                    <CarouselCard 
                                        key={item.id}
                                        title={item.title}
                                        description={ item.description }/>
                                </div>
                            )
                        })
                    } 
                </div>
                <div className="slideshowDots">
                    {items.map((item, idx) => (
                        <div key={item.id}
                            className={`slideshowDot${index === idx ? " active" : ""}`}
                            onClick={() => {setIndex(idx)}}
                        >   
                        </div>
                    ))}
                </div>
                
            </div>
            <button onClick={() => handleNext()}>
                <span>+</span>
            </button>
        </>
    )
}
export default CarouselComponent  */
//https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react#the-trick

/* 
import { useState } from 'react';
//import { SwitchTransition, CSSTransition } from 'react-transition-group';
import data from '../../translation/spanish.json';

const CarouselComponent = (): JSX.Element => {
    const [index, setIndex] = useState<number>(0);
    const length = 4;
    const items = data.aboutUs.VALUES;

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <div className='carousel '>
            <div className='carouselW' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                <div className='carousel-title' >
                    <h1>{items[index].title}</h1>
                </div>
                <div className='carousel-description'>
                    <p>{items[index].description}</p>
                </div>
            </div>
            <button onClick={handleNext}>
                <span>+</span>
            </button>
        </div>
    );
};

export default CarouselComponent; */

//https://www.makeuseof.com/react-js-interactive-carousel-build/

/* 
import { ActionKind, usePony } from "pony-props";
import CarouselCard from "../CarouselCard/CarouselCard";
import data from '../../translation/spanish.json';

const CarouselComponent = () => {
    const items = data.aboutUs.VALUES
    
    const {
    getSectionProps,
    getHeadingProps,
    getCarouselWrapperProps,
    getCarouselProps,
    getCarouselItemProps,
    getButtonProps,
    getAnnouncerProps,
    state
  } = usePony({ numItems: items.length });

    
  return (
      <div className='container' {...getSectionProps()}>
          <h1 {...getHeadingProps()}></h1>
        <div className='container-wrapper'{...getCarouselWrapperProps()}>
            <ul className='lista' {...getCarouselProps()}>
                  {
                      items.map((item, idx) => (
                    <li className='lista-item'key={idx} {...getCarouselItemProps(idx)}>
                              <CarouselCard
                                  title={item.title}
                                  description={ item.description} />
                    </li>
                      ))
                  }
            </ul>
        </div>
        <button {...getButtonProps(ActionKind.Next)}>+</button>
        <div {...getAnnouncerProps()}>
        <p>{`Item ${state.activeSlideIndex + 1} of ${items.length}`}</p>
        </div>
    </div>
  );
};

export default CarouselComponent
 */

//carrusel 4
/* import { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import data from '../../translation/spanish.json';

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
      <div className='carousel-wrapper'>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={items[index].id}
            classNames='fade'
            timeout={300}
          >
            <div className='carousel-title'>
              <h1>{items[index].title}</h1>
            </div>
          </CSSTransition>
        </SwitchTransition>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={items[index].id}
            classNames='fade'
            timeout={300}
          >
            <div className='carousel-description'>
              <p>{items[index].description}</p>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <button onClick={handleNext}>
        <span>+</span>
      </button>
    </div>
  );
};

export default CarouselComponent; */

//carrusel 5

import { useState, useRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
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
                    <div className='carousel-content'>
                        <div className='carousel-title'>
                            <h1>{items[index].title}</h1>
                        </div>
                        <div className='carousel-description'>
                            <p>{items[index].description}</p>
                        </div>
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
        <button onClick={handleNext}>
            <span>+</span>
        </button>
    </div>
  );
};

export default CarouselComponent;




 

/*CARRUSEL 6*/
/* import { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import data from '../../translation/spanish.json';

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
      <div className='carousel-wrapper'>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={items[index].id}
            classNames='fade-horizontal'
            timeout={300}
          >
            <div className='carousel-title'>
              <h1>{items[index].title}</h1>
            </div>
          </CSSTransition>
        </SwitchTransition>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={items[index].id}
            classNames='fade-horizontal'
            timeout={300}
          >
            <div className='carousel-description'>
              <p>{items[index].description}</p>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <button onClick={handleNext}>
        <span>+</span>
      </button>
    </div>
  );
};

export default CarouselComponent; */
