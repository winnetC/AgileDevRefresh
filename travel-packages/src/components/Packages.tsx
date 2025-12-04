import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import packagesData from '../data/local-packages.json';
import Filter from './Filter';
import PackageList from './PackageList';
import Sort from './Sort';
import { Package } from '../types/packages';
import '../App.css';

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

  const [searchTerm, setSearchTerm] = useState<string>(''); // Search term state
  const [sortBy, setSortBy] = useState<string>(''); // Sort state

  useEffect(() => {
    setJsonPackages(packagesData); // Load packages data from JSON
  }, []);

  if (error) return <div>Error loading API packages.</div>;
  if (useApi && !apiPackages) return <div>Loading API packages...</div>;

  // Packages to display
  const packagesToDisplay = useApi ? apiPackages || [] : jsonPackages;
  const filters = useApi ? apiFilters : jsonFilters;

  return (
    <div>
      <h1>Travel Packages</h1>

      <button className="toggle-button" onClick={() => setUseApi(prev => !prev)}>
        Switch to {useApi ? 'JSON' : 'API'} Data
      </button>

      <p className="data-source-text">
        {useApi ? 'International' : 'Local'}
      </p>

      {/* Conditional rendering for search input and filters */}
      {useApi ? (
        <>
          <input
            type="text"
            placeholder="Search Packages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <Sort sortBy={sortBy} setSortBy={setSortBy} />
        </>
      ) : (
        <Filter
          filters={filters}
          setFilters={setJsonFilters} // Only use setJsonFilters for local data
        />
      )}

      <PackageList packages={packagesToDisplay} filters={filters} searchTerm={searchTerm} sortBy={sortBy} /> {/* Pass sortBy */}
    </div>
  );
};

export default PackagesComponent;