import React from 'react';
import { Property } from '../interface/Property';
import '../App.css';
interface PropertyCardProps {
    property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    return (
        <div className="property-card">
            <h2 className="text-xl font-bold">{property.title}</h2>
            <p>{property.description}</p>
            <p className="text-lg font-semibold">${property.price}</p>
            <p>{property.location}</p>
        </div>
    );
};

export default PropertyCard;