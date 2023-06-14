import { Carousel } from 'react-carousel3';
import data from '../../translation/spanish.json';
import React, { useState, useEffect, useRef } from 'react';

interface Service {
    id: string;
    title: string;
    description: string;
  }

  const CardCarousel: React.FC = () => {
    const services: { PACKS: Service[] } = data.services;
    const [selected, setSelected] = useState<string>('service1');
    const highestZIndexRef = useRef<number>(0);
  
    useEffect(() => {
      const carouselElements = document.querySelectorAll<HTMLElement>('.service');
  
      carouselElements.forEach((element) => {
        const zIndex = parseInt(window.getComputedStyle(element).getPropertyValue('z-index') || '0', 10);
        const id = element.getAttribute('id');
        if (zIndex > highestZIndexRef.current) {
          highestZIndexRef.current = zIndex;
          setSelected(id || '');
        }
      });
    }, []);
  
    const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
      event.stopPropagation();
      const target = event.target as HTMLDivElement;
      const id = target.id
      setSelected(id);
    };  
    return (
      <>
        <div className='services-container' onClick={handleClick}>
          <Carousel height={50} width={200} yOrigin={100} xOrigin={150} xRadius={360} yRadius={-70} autoPlay={false}>
            {services.PACKS.map((pack) => (
              <div
                key={pack.id}
                id={`service${pack.id}`}
                className={`service service${pack.id} ${selected === `service${pack.id}` ? 'highest-z-index' : ''}`}
              >
                <div className="service-content">
                  <p>{pack.title}</p>
                  <p>{pack.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </>
    );
  };

export { CardCarousel }