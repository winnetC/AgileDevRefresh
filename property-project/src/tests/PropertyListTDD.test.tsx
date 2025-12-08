// src/tests/PropertyListTDD.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PropertyListTDD from '../components/PropertyListTDD';
import propertiesData from '../project-data/properties.json';

describe('PropertyListTDD Component', () => {
    // Test to check if the property titles render correctly in the document
    test('renders properties correctly', () => {
        render(<PropertyListTDD />);
        
        expect(screen.getByText("Luxury Apartment")).toBeInTheDocument();
        expect(screen.getByText("Cozy Cottage")).toBeInTheDocument();
        expect(screen.getByText("Modern Loft")).toBeInTheDocument();
    });

    // Test to verify that property details such as description, price, and location display correctly
    test('displays property details', () => {
        render(<PropertyListTDD />);
        
        expect(screen.getByText("A beautiful luxury apartment with an ocean view.")).toBeInTheDocument();
        expect(screen.getByText("$250000")).toBeInTheDocument();
        expect(screen.getByText("Miami")).toBeInTheDocument();
    });

    // Test to check that the correct number of PropertyCard components is rendered based on the properties data
    test('renders correct number of PropertyCards', () => {
        render(<PropertyListTDD />);
        const cards = screen.getAllByRole('heading', { level: 2 }); 
        expect(cards).toHaveLength(propertiesData.length);
    });

    // Test to ensure that sorting options are displayed correctly in the component
    test('displays sorting options correctly', () => {
        render(<PropertyListTDD />);
        
        expect(screen.getByText("Sort by:")).toBeInTheDocument();
        expect(screen.getByLabelText("Price (Low to High)")).toBeInTheDocument();
        expect(screen.getByLabelText("Location (A to Z)")).toBeInTheDocument();
    });

    // Test to verify that the property list filters correctly based on the search input
    test('filters properties based on search input', () => {
        render(<PropertyListTDD />);

        const searchInput = screen.getByPlaceholderText("Search properties...");
        fireEvent.change(searchInput, { target: { value: "Cottage" } });

        expect(screen.getByText("Cozy Cottage")).toBeInTheDocument();
        expect(screen.queryByText("Luxury Apartment")).toBeNull(); // Should not be found
    });

    // Test to ensure that the correct message is displayed when no properties match the search input
    test('displays no properties found message', () => {
        render(<PropertyListTDD />);

        const searchInput = screen.getByPlaceholderText("Search properties...");
        fireEvent.change(searchInput, { target: { value: "Nonexistent Property" } });

        expect(screen.getByText("No properties found.")).toBeInTheDocument();
    });
});