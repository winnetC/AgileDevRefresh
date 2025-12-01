const { add, subtract, multiply } = require('../calculator');

describe('Calculator Functions', () => {
  test('adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtracts two numbers', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiplies two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});