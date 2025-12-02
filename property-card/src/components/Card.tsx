import React from 'react';
import { Button, Card, CardContent, CardMedia } from '@mui/material';

export interface Property {
  key: number;
  image: string;
  title: string;
  price: string;
  variant?: 'large' | 'small';
  details?: string;
}

interface PropertyCardProps {
  propertyDetails: Property[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({ propertyDetails }) => {
  return (
    <>
      {propertyDetails.map((property) => {
        const isLarge = property.variant === 'large';

        return (
          <Card
            key={property.title} // Assuming title is unique; otherwise, use a different key (like id)
            className={`grid grid-cols-1 ${isLarge ? 'w-full sm:w-80' : 'w-full sm:w-48'} sm:p-4 p-6 border border-gray-200 shadow-md hover:shadow-xl transition-shadow`}
            elevation={0}
            style={{
              borderRadius: '8px',
              border: '1px solid black',
            }}
          >
            <CardMedia
              component="img"
              alt={property.title}
              image={property.image}
              className="object-cover sm:h-40 h-60 rounded-md transition-transform hover:scale-105"
            />
            <CardContent className="p-0 m-0">
              <p className="text-black font-bold text-lg">{property.title}</p>
              <p
                className="text-yellow-700 font-normal"
                style={{
                  color: isLarge ? 'maroon' : 'black',
                  fontWeight: isLarge ? 'bold' : 'normal',
                }}
              >
                {property.price}
              </p>
              {property.details && property.details !== "" && (
                <p className="text-gray-600">{property.details}</p> // Conditional rendering for description
              )}
            </CardContent>
            <Button
              variant="contained"
              className="mt-auto transition-transform hover:scale-105"
              style={{
                border: isLarge ? 'none' : '1px solid black',
                color: 'white',
                backgroundColor: isLarge ? 'brown' : 'black',
              }}
            >
              {isLarge ? "View Promotion": "View Details"}
            </Button>
          </Card>
        );
      })}
    </>
  );
};

export default PropertyCard;