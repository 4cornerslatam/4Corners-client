import { useState } from 'react';
import data from '../../translation/spanish.json';

const CarouselComponent = (): JSX.Element => {
    const [index, setIndex] = useState<number>(0);
    
    const items = data.aboutUs.VALUES;
    const length = 4;

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <div className="slideshow">
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {
                    items.map((item) => {
                        return (
                            <div className="slide" key={item.id}>
                                <section className='title'>
                                    <h2>{item.title}</h2>
                                </section>
                                <section className='description'>
                                    <p>{item.description}</p>
                                </section>
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
            <button onClick={()=>handleNext()}>
                <span>+</span>
            </button>
        </div>
    )
}
export default CarouselComponent  
//https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react#the-trick

/*
import { useState } from 'react';
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

export default CarouselComponent;*/

//https://www.makeuseof.com/react-js-interactive-carousel-build/
