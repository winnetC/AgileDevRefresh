// src/tests/PropertyListTDD.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import PropertyListTDD from '../components/PropertyListTDD';

describe('PropertyListTDD Component', () => {
    test('renders properties correctly', () => {
        render(<PropertyListTDD />);
        
        expect(screen.getByText("Luxury Apartment")).toBeInTheDocument();
        expect(screen.getByText("Cozy Cottage")).toBeInTheDocument();
        expect(screen.getByText("Modern Loft")).toBeInTheDocument();
    });

    test('displays property details', () => {
        render(<PropertyListTDD />);
        
        expect(screen.getByText("A beautiful luxury apartment with an ocean view.")).toBeInTheDocument();
        expect(screen.getByText("$250000")).toBeInTheDocument();
        expect(screen.getByText("Miami")).toBeInTheDocument();
    });

    test('renders correct number of PropertyCards', () => {
        render(<PropertyListTDD />);
        
        const cards = screen.getAllByRole('heading', { level: 2 }); 
        expect(cards).toHaveLength(3); 
    });
});