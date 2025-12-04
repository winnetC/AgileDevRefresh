import React from 'react';
import { Package } from '../types/packages';
import '../App.css'; 

interface PackageListProps {
  packages: Package[];
  filters: { price: string; location: string; category: string };
}

const PackageList: React.FC<PackageListProps> = ({ packages, filters }) => {
  // Handle filtering for packages
  const filteredPackages = packages.filter(pkg => {
    const withinPrice = !filters.price || pkg.price <= parseFloat(filters.price);
    const matchesLocation = !filters.location || pkg.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesCategory = !filters.category || pkg.category.toLowerCase().includes(filters.category.toLowerCase());

    return withinPrice && matchesLocation && matchesCategory;
  });

  return (
    <div className="card-container">
      {filteredPackages.length > 0 ? (
        filteredPackages.map(pkg => (
          <div className="package-card" key={pkg.id}>
            <h2>{pkg.title}</h2>
            <p className="package-card-desc">{pkg.description}</p>
            <p><strong>{pkg.price} USD</strong></p>
            <p>Location: {pkg.location}</p>
            <p>Category: {pkg.category}</p>
          </div>
        ))
      ) : (
        <p>No packages match your filters.</p>
      )}
    </div>
  );
};

export default PackageList;