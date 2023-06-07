import { useState, useRef } from 'react';
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
      <div className='carousel-title'>
        <SwitchTransition>
          <CSSTransition
            key={items[index].id}
            nodeRef={handleNext}
            addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false);
            }}
            classNames='fade'
          >
            <h1>{items[index].title}</h1>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <div className='carousel-description'>
        <SwitchTransition>
          <CSSTransition
            key={items[index].id}
            nodeRef={handleNext}
            addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false);
            }}
            classNames='fade'
          >
            <p>{items[index].description}</p>
          </CSSTransition>
        </SwitchTransition>
        <button onClick={handleNext}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;

//https://www.makeuseof.com/react-js-interactive-carousel-build/

/* import { useState, useRef, useEffect } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import data from '../../translation/spanish.json';

const CarouselComponent = (): JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  const length = 4;
  const items = data.aboutUs.VALUES;
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  useEffect(() => {
    const titleNode = titleRef.current;
    const descriptionNode = descriptionRef.current;

    const handleTransitionEnd = () => {
      // Aquí se ejecuta el código después de que la transición haya terminado
    };

    titleNode.addEventListener('transitionend', handleTransitionEnd);
    descriptionNode.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      titleNode.removeEventListener('transitionend', handleTransitionEnd);
      descriptionNode.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);

  return (
    <div className='carousel'>
      <div className='carousel-title'>
        <SwitchTransition mode='out-in'>
          <CSSTransition
            key={items[index].id}
            nodeRef={titleRef}
            classNames='fade'
          >
            <h1 ref={titleRef}>{items[index].title}</h1>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <div className='carousel-description'>
        <SwitchTransition mode='out-in'>
          <CSSTransition
            key={items[index].id}
            nodeRef={descriptionRef}
            classNames='fade'
          >
            <p ref={descriptionRef}>{items[index].description}</p>
          </CSSTransition>
        </SwitchTransition>
        <button onClick={handleNext}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent; */