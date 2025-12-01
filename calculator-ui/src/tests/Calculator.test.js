import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';
import * as math from '../../../calculator-api/calculator'; 

test('calculates addition', () => {
  jest.spyOn(math, 'add').mockReturnValue(3);

  render(<Calculator onCalculate={math} />);
  fireEvent.change(screen.getByRole('textbox', { name: '' }), { target: { value: '1' } });
  fireEvent.change(screen.getByRole('textbox', { name: '' }), { target: { value: '2' } });
  fireEvent.change(screen.getByRole('combobox'), { target: { value: '+' } });
  fireEvent.click(screen.getByRole('button', { name: 'Calculate' }));

  expect(screen.getByRole('heading', { name: /result/i })).toHaveTextContent('Result: 3');

  math.add.mockRestore();
});