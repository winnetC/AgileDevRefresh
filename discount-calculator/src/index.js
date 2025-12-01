import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import global CSS (if applicable)
import App from './App'; // Import the main App component

// Render the App component into the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
