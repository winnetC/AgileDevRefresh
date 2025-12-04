import React from 'react';
import { Package } from '../types/packages';
import '../App.css'; 

interface PackageListProps {
  packages: Package[];
  filters: { price: string; location: string; category: string };
  searchTerm: string;
  sortBy: string; // Include sortBy prop
}

const PackageList: React.FC<PackageListProps> = ({ packages, filters, searchTerm, sortBy }) => {
  // Handle filtering for packages
  const filteredPackages = packages.filter(pkg => {
    const withinPrice = !filters.price || pkg.price <= parseFloat(filters.price);
    const matchesLocation = !filters.location || pkg.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesCategory = !filters.category || pkg.category.toLowerCase().includes(filters.category.toLowerCase());
    const matchesSearch = !searchTerm || pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pkg.description.toLowerCase().includes(searchTerm.toLowerCase());

    return withinPrice && matchesLocation && matchesCategory && matchesSearch;
  });

  // Sorting Logic
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price; // Sort by Price
    }
    if (sortBy === 'location') {
      return a.location.localeCompare(b.location); // Sort by Location
    }
    return 0; // No sorting if no option is selected
  });

  return (
    <div className="card-container">
      {sortedPackages.length > 0 ? (
        sortedPackages.map(pkg => (
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