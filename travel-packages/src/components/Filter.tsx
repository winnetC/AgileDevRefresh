import React from 'react';
import '../App.css';

interface Filters {
  price: string;
  location: string;
  category: string;
}

interface FilterProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const Filter: React.FC<FilterProps> = ({ filters, setFilters }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filter-container">
      <input
        type="number"
        name="price"
        placeholder="Max Price"
        value={filters.price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={filters.location}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={filters.category}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;