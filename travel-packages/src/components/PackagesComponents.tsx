import React, { useEffect, useState } from 'react';
import packagesData from '../data/packages.json';
import { Package } from '../types/packages';

const Packages: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [filters, setFilters] = useState<{ price: string; location: string; category: string }>({
    price: '',
    location: '',
    category: '',
  });

  useEffect(() => {
    setPackages(packagesData); // Load packages data at component mount
  }, []);

  // Filtering Logic
  const filteredPackages = packages.filter(pkg => {
    const withinPrice = !filters.price || pkg.price <= parseInt(filters.price);
    const matchesLocation = !filters.location || pkg.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesCategory = !filters.category || pkg.category.toLowerCase() === filters.category.toLowerCase();
    
    return withinPrice && matchesLocation && matchesCategory;
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1>Travel Packages</h1>
      <div className="filter-container">
        <input
          type="number"
          name="price"
          placeholder="Max Price"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleFilterChange}
        />
      </div>
      <ul>
        {filteredPackages.length > 0 ? (
          filteredPackages.map(pkg => (
            <li key={pkg.id}>
              <h2>{pkg.title}</h2>
              <p>{pkg.description}</p>
              <p>{pkg.price} USD</p>
              <p>Location: {pkg.location}</p>
              <p>Category: {pkg.category}</p>
            </li>
          ))
        ) : (
          <p>No packages match your filters.</p>
        )}
      </ul>
    </div>
  );
};

export default Packages;