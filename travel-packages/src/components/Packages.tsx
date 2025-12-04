import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import packagesData from '../data/packages.json';
import { Package } from '../types/packages';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const PackagesComponent: React.FC = () => {
  const [useApi, setUseApi] = useState<boolean>(true);
  const { data: apiPackages, error } = useSWR<Package[]>(useApi ? 'http://localhost:5000/api/packages' : null, fetcher);
  const [jsonPackages, setJsonPackages] = useState<Package[]>([]);

  const [apiFilters, setApiFilters] = useState<{ price: string; location: string; category: string }>({
    price: '',
    location: '',
    category: '',
  });

  const [jsonFilters, setJsonFilters] = useState<{ price: string; location: string; category: string }>({
    price: '',
    location: '',
    category: '',
  });

  useEffect(() => {
    setJsonPackages(packagesData); // Load packages data from JSON
  }, []);

  if (error) return <div>Error loading API packages.</div>;
  if (useApi && !apiPackages) return <div>Loading API packages...</div>;

  const packagesToDisplay = useApi ? apiPackages : jsonPackages;

  // Handle filtering for API packages
  const filteredApiPackages = (apiPackages || []).filter(pkg => {
    const withinPrice = !apiFilters.price || pkg.price <= parseFloat(apiFilters.price);
    const matchesLocation = !apiFilters.location || pkg.location.toLowerCase().includes(apiFilters.location.toLowerCase());
    const matchesCategory = !apiFilters.category || pkg.category.toLowerCase() === apiFilters.category.toLowerCase();
    
    return withinPrice && matchesLocation && matchesCategory;
  });

  // Handle filtering for JSON packages
  const filteredJsonPackages = jsonPackages.filter(pkg => {
    const withinPrice = !jsonFilters.price || pkg.price <= parseFloat(jsonFilters.price);
    const matchesLocation = !jsonFilters.location || pkg.location.toLowerCase().includes(jsonFilters.location.toLowerCase());
    const matchesCategory = !jsonFilters.category || pkg.category.toLowerCase() === jsonFilters.category.toLowerCase();
    
    return withinPrice && matchesLocation && matchesCategory;
  });

  const handleApiFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setApiFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleJsonFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setJsonFilters(prev => ({ ...prev, [name]: value }));
  };

  // Render logic for API packages
  const renderApiPackages = () => {
    if (filteredApiPackages.length > 0) {
      return filteredApiPackages.map(pkg => (
        <li key={pkg.id}>
          <h2>{pkg.title}</h2>
          <p>{pkg.description}</p>
          <p>{pkg.price} USD</p>
          <p>Location: {pkg.location}</p>
          <p>Category: {pkg.category}</p>
        </li>
      ));
    } else {
      return <p>No API packages match your filters.</p>;
    }
  };

  // Render logic for JSON packages
  const renderJsonPackages = () => {
    if (filteredJsonPackages.length > 0) {
      return filteredJsonPackages.map(pkg => (
        <li key={pkg.id}>
          <h2>{pkg.title}</h2>
          <p>{pkg.description}</p>
          <p>{pkg.price} USD</p>
          <p>Location: {pkg.location}</p>
          <p>Category: {pkg.category}</p>
        </li>
      ));
    } else {
      return <p>No JSON packages match your filters.</p>;
    }
  };

  return (
    <div>
      <h1>Travel Packages</h1>
      <button onClick={() => setUseApi(prev => !prev)}>
        Switch to {useApi ? 'JSON' : 'API'} Data
      </button>
      <div className="filter-container">
        {useApi ? (
          <>
            <h2>API Packages Filters</h2>
            <input type="number" name="price" placeholder="Max Price" onChange={handleApiFilterChange} />
            <input type="text" name="location" placeholder="Location" onChange={handleApiFilterChange} />
            <input type="text" name="category" placeholder="Category" onChange={handleApiFilterChange} />
          </>
        ) : (
          <>
            <h2>JSON Packages Filters</h2>
            <input type="number" name="price" placeholder="Max Price" onChange={handleJsonFilterChange} />
            <input type="text" name="location" placeholder="Location" onChange={handleJsonFilterChange} />
            <input type="text" name="category" placeholder="Category" onChange={handleJsonFilterChange} />
          </>
        )}
      </div>
      <ul>
        {useApi ? renderApiPackages() : renderJsonPackages()}
      </ul>
    </div>
  );
};

export default PackagesComponent;