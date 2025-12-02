import React from 'react';
import { PropertyCard } from './Card';
import luxuryApartmentImage from '../images/luxury-apartment.png';
import cozyCottageImage from '../images/cozy-cottage.jpg';
import modernVillaImage from '../images/modern-villa.png';
import quaintBungalowImage from '../images/quaint-bungalow.png';
import sunnyBeachHouseImage from '../images/sunny-beachouse.png';
import stylishApartmentImage from '../images/stylish-apartment.png';
import rusticCabinImage from '../images/rustic-cabin.jpg';
import urbanLoftImage from '../images/urban-loft.jpg';

const propertyCards: Array<{
  key: number;
  image: string;
  title: string;
  price: string;
  buttonText: string;
  variant: 'small' | 'large';
}> = [
  {
    key: 1,
    image: luxuryApartmentImage,
    title: "Penthouse",
    price: "$1 300,000",
    buttonText: "View Details",
    variant: "large",
  },
  {
    key: 2,
    image: cozyCottageImage,
    title: "Cottage",
    price: "$150,000",
    buttonText: "View Details",
    variant: "small",
  },
   {
    key: 3,
    image: quaintBungalowImage, 
    title: "Bungalow",
    price: "$250,000",
    buttonText: "View Details",
    variant: "small",
  },
  {
    key: 4,
    image: modernVillaImage,  
    title: "Villa",
    price: "$850,000",
    buttonText: "View Details",
    variant: "large",
  },
  {
    key: 5,
    image: stylishApartmentImage, // Replace with the actual image variable or path
    title: "Apartment",
    price: "150,000",
    buttonText: "View Details",
    variant: "small",
  },
  {
    key: 6,
    image: urbanLoftImage, // Replace with the actual image variable or path
    title: "Urban Loft",
    price: "$400,000",
    buttonText: "View Details",
    variant: "large",
  },
  {
    key: 7,
    image: sunnyBeachHouseImage, // Replace with the actual image variable or path
    title: "Beach House",
    price: "$999,999",
    buttonText: "View Details",
    variant: "large",
  },
  {
    key: 8,
    image: rusticCabinImage, // Replace with the actual image variable or path
    title: "Cabin",
    price: "$200,000",
    buttonText: "View Details",
    variant: "small",
  },
];

const PropertyCardPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-start sm:flex-row sm:flex-wrap gap-4">
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