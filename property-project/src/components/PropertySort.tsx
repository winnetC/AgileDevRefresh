import '../App.css';
import React from 'react';

interface PropertySortProps {
    sortBy: string | null; // Allow sortBy to be string or null
    setSortBy: (sortMethod: string | null) => void; // Allow setSortBy to accept null
}

const PropertySort: React.FC<PropertySortProps> = ({ sortBy, setSortBy }) => {
    return (
        <div className="sort-card">
            <h3 className="sort-title">Sort by:</h3>
            <div className="sort-options">
                <label>
                    <input
                        type="radio"
                        value="price"
                        checked={sortBy === 'price'}
                        onChange={() => setSortBy('price')}
                        className="mr-2"
                    />
                    Price (Low to High)
                </label>
                <label>
                    <input
                        type="radio"
                        value="location"
                        checked={sortBy === 'location'}
                        onChange={() => setSortBy('location')}
                        className="mr-2"
                    />
                    Location (A to Z)
                </label>
            </div>
        </div>
    );
};

export default PropertySort;