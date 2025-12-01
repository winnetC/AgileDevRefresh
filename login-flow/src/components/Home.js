// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <Link to="/login">
        <button>Go to Login</button> {/* Button to navigate to Login */}
      </Link>
    </div>
  );
};

export default Home;