function calculateDiscount(price, percentage) {
  if (typeof price !== 'number' || typeof percentage !== 'number' || price < 0 || percentage < 0) {
    throw new Error('Invalid input');
  }
  const discountAmount = price - (price * (percentage / 100));
  return Math.round(discountAmount * 100) / 100; // Round to 2 decimal places
}

module.exports = calculateDiscount;