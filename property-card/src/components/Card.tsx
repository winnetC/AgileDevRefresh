import React from 'react';
import { Button, Card, CardContent, CardMedia } from '@mui/material';

interface PropertyCardProps {
  key: number;
  image: string;
  title: string;
  price: string;
  buttonText: string;
  variant?: 'large' | 'small';
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ image, title, price, buttonText, variant = 'small' }) => {
  const isLarge = variant === 'large';

  return (
    <Card className={`grid grid-cols-1 ${isLarge ? 'w-full sm:w-60' : 'w-full sm:w-48'} sm:p-4 p-6 border border-gray-200 shadow-md hover:shadow-xl transition-shadow`}
        elevation={0}
        style={{ borderRadius: '8px ',
            border: '1px solid black'
         }} 
    >
        <CardMedia 
            component="img" 
            alt={title} 
            image={image} 
            className="object-cover sm:h-40 h-60 rounded-md transition-transform hover:scale-105" 
        />
        <CardContent className="p-0 m-0">
            <p className="text-black font-bold text-lg">
            {title}
            </p>
            <p 
                className="text-yellow-700 font-normal"
                style={{ color: isLarge ? 'maroon' : 'black',
                    fontWeight: isLarge ? 'bold' : 'normal'
                }} 
             >
            {price}
            </p>
        </CardContent>
        <Button variant="contained"
            className="mt-auto transition-transform hover:scale-105"
            style={{ border: isLarge ? 'none' : '1px solid black',
                color: 'white',
                backgroundColor: isLarge ? 'brown' : 'black'
             }} 
        >
            {buttonText}
        </Button>
    </Card>
  );
};