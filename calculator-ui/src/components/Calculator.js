import React, { useState } from 'react';

const Calculator = ({ onCalculate }) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res;

    switch (operator) {
      case '+':
        res = onCalculate.add(a, b);
        break;
      case '-':
        res = onCalculate.subtract(a, b);
        break;
      case '*':
        res = onCalculate.multiply(a, b);
        break;
      default:
        return;
    }
    setResult(res);
  };

  return (
    <div>
      <input
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        aria-label="First Number"
      />
      <input
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        aria-label="Second Number"
      />
      <select
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
        aria-label="Select Operator"
      >
        <option value="">Select</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
      </select>
      <button onClick={calculate}>Calculate</button>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
};

export default Calculator;