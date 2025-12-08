// src/components/PropertyListTDD.tsx

import React, { useState } from 'react';
import '../App.css';
import { Property } from '../interface/Property';
import PropertyCard from './PropertyCard';
import PropertySearch from './PropertySearch';
import PropertySort from './PropertySort'; // Import the new sort component
import propertiesData from '../project-data/properties.json';

const PropertyListTDD: React.FC = () => {
    const [properties, setProperties] = useState<Property[]>(propertiesData);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState<string | null>(null); // Initialize as null

    // Filter properties based on search term
    const filteredProperties = properties.filter(property => 
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort filtered properties based on the selected sort method
    const sortedProperties = [...filteredProperties].sort((a, b) => {
        if (sortBy === 'price') {
            return a.price - b.price;
        } else if (sortBy === 'location') {
            return a.location.localeCompare(b.location);
        }
        return 0; // Default case; no sorting
    });

    return (
        <div>
            <PropertySearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <PropertySort sortBy={sortBy} setSortBy={(method) => setSortBy(method)} /> {/* Pass down the state updater */}

            <div className="property-grid">
                {sortedProperties.length > 0 ? (
                    sortedProperties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))
                ) : (
                    <p>No properties found.</p>
                )}
            </div>
        </div>
    );
};

export default PropertyListTDD;