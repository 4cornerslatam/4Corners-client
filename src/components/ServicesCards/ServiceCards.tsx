import data from '../../translation/spanish.json';

interface Service {
    id: string;
    title: string;
    description: string;
  }

const ServiceCards: React.FC = () => {
    const services: { PACKS: Service[] } = data.services;
    return (
      <div className='service-cards-container'>
        {services.PACKS.map((service) => (
              <div
              key={service.id}
              id={`service${service.id}`}
              className={`service-card service-card${service.id}`}
            >
              <div className="service-details">
                <p>{service.title}</p>
                <p>{service.description}</p>
              </div>
            </div>
        ))}
      </div>
    );
}

export { ServiceCards }