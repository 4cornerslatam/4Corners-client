import React from 'react';
import data from '../translation/spanish.json';
import { ServiceCard } from '../components/ServiceCard/ServiceCard';

const Services: React.FC = () => {
  const services = data.services;

  return(
    <>
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
      <div className='cards-container'>
        {services.PACKS.map(pack => 
        (<ServiceCard 
          id={pack.id}
          title={pack.title}
          description={pack.description}
        />)
        )}
      </div>
    </section>
    </>
  )
}

export { Services }