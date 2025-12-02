import React from 'react';
import { PropertyCard } from './Card';

const PropertyCardPage: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <PropertyCard 
        image="https://via.placeholder.com/150"
        title="Luxury Apartment"
        price="$300,000"
        buttonText="View Details"
        variant="large"
      />
      <PropertyCard 
        image="https://via.placeholder.com/150"
        title="Cozy Cottage"
        price="$150,000"
        buttonText="View Details"
        variant="small"
      />
    </div>
  );
};

export default PropertyCardPage;