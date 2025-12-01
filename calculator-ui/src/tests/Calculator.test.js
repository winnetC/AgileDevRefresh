import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';
import * as math from '../../../calculator-api/calculator'; 

test('calculates addition', () => {
  jest.spyOn(math, 'add').mockReturnValue(3);

  render(<Calculator onCalculate={math} />);
  fireEvent.change(screen.getByLabelText('First Number'), { target: { value: '1' } });
  fireEvent.change(screen.getByLabelText('Second Number'), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText('Select Operator'), { target: { value: '+' } });
  fireEvent.click(screen.getByRole('button', { name: /calculate/i }));

  expect(screen.getByRole('heading', { name: /result/i })).toHaveTextContent('Result: 3');

  math.add.mockRestore(); // Restore original implementation
});