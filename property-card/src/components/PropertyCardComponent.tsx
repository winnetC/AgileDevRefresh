import React from 'react';
import { PropertyCard } from './Card';
import luxuryApartmentImage from '../images/luxury-apartment.png';
import cozyCottageImage from '../images/cozy-cottage.jpg';

const propertyCards: Array<{
  key: number;
  image: string;
  title: string;
  price: string;
  buttonText: string;
  variant: 'large' | 'small';
}> = [
  {
    key: 1,
    image: luxuryApartmentImage,
    title: "Luxury Apartment",
    price: "$300,000",
    buttonText: "View Details",
    variant: "large",
  },
  {
    key: 2,
    image: cozyCottageImage,
    title: "Cozy Cottage",
    price: "$150,000",
    buttonText: "View Details",
    variant: "small",
  },
];

const PropertyCardPage: React.FC = () => {
  return (
    <div className="flex space-x-4">
      {propertyCards.map((property) => (
        <PropertyCard 
          key={property.key}
          image={property.image}
          title={property.title}
          price={property.price}
          buttonText={property.buttonText}
          variant={property.variant}
        />
      ))}
    </div>
  );
};

export default PropertyCardPage;