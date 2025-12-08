import React from 'react';
import './App.css';
import PropertyListTDD from './components/PropertyListTDD'; // Ensure the path is correct

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="text-2xl font-bold">Property Listings</h1>
            </header>
            <main className=''>
                <PropertyListTDD />
            </main>
        </div>
    );
};

export default App;