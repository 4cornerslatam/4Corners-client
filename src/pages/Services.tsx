import React from 'react';
import data from '../translation/spanish.json';
import { CardCarousel } from '../components/CardCarousel/CardCarousel';

const Services: React.FC = () => {
  const services = data.services;

  return(
    <main className='main-services'>
    <section className='services-intro'>
      <div className='services-title'>
        <h2>{services.TITLE.titleLine1}</h2>
        <h2>{services.TITLE.titleLine2}</h2>
      </div>
      <div className='services-description'>
        <p>{services.DESCRIPTION}</p>
      </div>
    </section>
    <section className='services-cards'>
      <CardCarousel />
    </section>
    </main>
  )
}

export { Services }