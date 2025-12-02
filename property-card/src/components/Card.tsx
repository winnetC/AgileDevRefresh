import React from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

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
    <Card className={`flex flex-col ${isLarge ? 'w-80' : 'w-48'} p-4 border border-gray-200 shadow-md hover:shadow-xl transition-shadow`}
        elevation={0}  // Remove shadow
        style={{ borderRadius: '8px ',
            border: '1px solid black'
         }} 
    >
        <CardMedia 
            component="img" 
            alt={title} 
            image={image} 
            className="object-cover h-40 rounded-md transition-transform hover:scale-105" 
        />
        <CardContent>
            <Typography variant="h6" component="div" className="text-black">
            {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="text-black">
            {price}
            </Typography>
        </CardContent>
        <Button variant="contained"
            className="mt-auto transition-transform hover:scale-105"
            style={{ border: '1px solid black',
                color: 'white',
                backgroundColor: 'black'
             }} 
        >
            {buttonText}
        </Button>
    </Card>
  );
};