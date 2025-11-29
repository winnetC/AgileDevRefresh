import React, { useState } from 'react';
import calculateDiscount from './calculateDiscount';

const DiscountDisplay = () => {
  const [price, setPrice] = useState('');
  const [percentage, setPercentage] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState(null);

  const handleCalculate = () => {
    try {
      const result = calculateDiscount(parseFloat(price), parseFloat(percentage));
      setDiscountedPrice(result);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Discount Calculator</h1>
      <input
        type="text"
        placeholder="Enter price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter percentage"
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate Discount</button>
      {discountedPrice !== null && <h2>Discounted Price: ${discountedPrice}</h2>}
    </div>
  );
};

export default DiscountDisplay;