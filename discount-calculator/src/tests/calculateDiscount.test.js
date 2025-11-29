const calculateDiscount = require('../calculateDiscount.js'); 

describe('calculateDiscount', () => {
  it('should calculate the discounted amount correctly for valid inputs', () => {
    expect(calculateDiscount(100, 20)).toBe(80);
  });

  it('should handle invalid input for price', () => {
    expect(() => calculateDiscount('abc', 20)).toThrow('Invalid input');
    expect(() => calculateDiscount(null, 20)).toThrow('Invalid input');
  });

  it('should handle invalid input for percentage', () => {
    expect(() => calculateDiscount(100, 'xyz')).toThrow('Invalid input');
    expect(() => calculateDiscount(100, -20)).toThrow('Invalid input');
  });

  it('should round the discounted amount to two decimal places', () => {
    expect(calculateDiscount(99.99, 33)).toBeCloseTo(66.99, 2);
  });
});