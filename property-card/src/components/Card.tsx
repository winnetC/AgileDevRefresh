import React from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  buttonText: string;
  variant?: 'large' | 'small';
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ image, title, price, buttonText, variant = 'small' }) => {
  const isLarge = variant === 'large';

  return (
    <Card className={`flex flex-col ${isLarge ? 'w-80' : 'w-48'} p-4`}>
      <CardMedia component="img" alt={title} image={image} className="object-cover h-40" />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <Button variant="contained" color="primary" className="mt-auto">
        {buttonText}
      </Button>
    </Card>
  );
};