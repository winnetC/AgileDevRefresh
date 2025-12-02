import React from 'react';
import PropertyCard, { Property } from './Card';
import luxuryApartmentImage from '../images/luxury-apartment.png';
import cozyCottageImage from '../images/cozy-cottage.jpg';
import quaintBungalowImage from '../images/quaint-bungalow.png';
import modernVillaImage from '../images/modern-villa.png';
import stylishApartmentImage from '../images/stylish-apartment.png';
import urbanLoftImage from '../images/urban-loft.jpg';
import sunnyBeachHouseImage from '../images/sunny-beachouse.png';
import rusticCabinImage from '../images/rustic-cabin.jpg';

const propertyDetails: Property[] = [
  { key: 1, image: luxuryApartmentImage, title: "Penthouse", price: "$1,300,000", variant: "large", details: "A luxurious penthouse with stunning city views." },
  { key: 2, image: cozyCottageImage, title: "Cottage", price: "$150,000", variant: "small", details: "" },
  { key: 3, image: quaintBungalowImage, title: "Bungalow", price: "$250,000", variant: "small", details: "" },
  { key: 4, image: modernVillaImage, title: "Villa", price: "$850,000", variant: "large", details: "A modern villa with spacious living areas." },
  { key: 5, image: stylishApartmentImage, title: "Apartment", price: "$150,000", variant: "small", details: "" },
  { key: 6, image: urbanLoftImage, title: "Urban Loft", price: "$400,000", variant: "large", details: "An urban loft featuring contemporary design." },
  { key: 7, image: sunnyBeachHouseImage, title: "Beach House", price: "$999,999", variant: "large", details: "A beautiful beach house perfect for relaxation." },
  { key: 8, image: rusticCabinImage, title: "Cabin", price: "$200,000", variant: "small", details: "" },
];

const PropertyCardPage = () => {
  return (
    <div className="flex flex-col justify-start sm:flex-row sm:flex-wrap gap-4">
      <PropertyCard propertyDetails={propertyDetails} />
    </div>
  );
};

export default PropertyCardPage;