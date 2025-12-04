import React from 'react';
import '../App.css';

interface SortProps {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const Sort: React.FC<SortProps> = ({ sortBy, setSortBy }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="sort-container">
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" value={sortBy} onChange={handleChange}>
        <option value="">Select</option>
        <option value="price">Price</option>
        <option value="location">Location</option>
      </select>
    </div>
  );
};

export default Sort;