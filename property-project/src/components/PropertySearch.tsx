import React from 'react';
import '../App.css'; // Ensure to import your CSS file

interface PropertySearchProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const PropertySearch: React.FC<PropertySearchProps> = ({ searchTerm, setSearchTerm }) => {
    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search properties..."
            value={searchTerm}
            onChange={handleSearchInputChange}
            className="search-bar"
        />
    );
};

export default PropertySearch;