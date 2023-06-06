import React from "react";

interface ServiceCardProps {
    id: string;
    title: string;
    description: string;
}

const ServiceCard: React.FC <ServiceCardProps> = ({id, title, description}) => {
    return (
        <div className={`service service${id}`}>
        <p className="service-title">{title}</p>
        <p className="service-description">{description}</p>
      </div>
    )
}

export { ServiceCard }