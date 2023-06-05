import React from "react";

interface ServiceCardProps {
    id: string;
    title: string;
    description: string;
}

const ServiceCard: React.FC <ServiceCardProps> = ({id, title, description}) => {
    return (
        <div key={id} className={`service service${id}`}>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    )
}

export { ServiceCard }