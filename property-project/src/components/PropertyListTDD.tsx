// src/components/PropertyListTDD.tsx

import React, { useState } from 'react';
import { Property } from '../interface/Property';
import PropertyCard from './PropertyCard';
import propertiesData from '../project-data/properties.json'; // Importing the JSON data

const PropertyListTDD: React.FC = () => {
    const [properties, setProperties] = useState<Property[]>(propertiesData); // Initialize with imported data

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
};

export default PropertyListTDD;