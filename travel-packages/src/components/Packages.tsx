import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import packagesData from '../data/packages.json'; // Adjust the path if necessary
import Filter from './Filter';
import PackageList from './PackageList';
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

  // Fallback to an empty array if packages are undefined
  const packagesToDisplay = useApi ? apiPackages || [] : jsonPackages;
  const filters = useApi ? apiFilters : jsonFilters;

  return (
    <div>
      <h1>Travel Packages</h1>
      <button onClick={() => setUseApi(prev => !prev)}>
        Switch to {useApi ? 'JSON' : 'API'} Data
      </button>
      <Filter
        filters={filters}
        setFilters={useApi ? setApiFilters : setJsonFilters}
      />
      <PackageList packages={packagesToDisplay} filters={filters} />
    </div>
  );
};

export default PackagesComponent;