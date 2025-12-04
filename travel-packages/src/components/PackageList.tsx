import React from 'react';
import { Package } from '../types/packages';

interface PackageListProps {
  packages: Package[];
  filters: { price: string; location: string; category: string };
}

const PackageList: React.FC<PackageListProps> = ({ packages, filters }) => {
  // Handle filtering for packages
  const filteredPackages = packages.filter(pkg => {
    const withinPrice = !filters.price || pkg.price <= parseFloat(filters.price);
    const matchesLocation = !filters.location || pkg.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesCategory = !filters.category || pkg.category.toLowerCase() === filters.category.toLowerCase();

    return withinPrice && matchesLocation && matchesCategory;
  });

  return (
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
  );
};

export default PackageList;