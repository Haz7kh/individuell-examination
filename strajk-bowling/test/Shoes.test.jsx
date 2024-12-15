import { render, screen, fireEvent } from '@testing-library/react';
import Shoes from '../src/components/Shoes/Shoes';

test('allows user to select and change shoe sizes', () => {
  render(<Shoes playerCount={2} />);

  const shoeInputs = screen.getAllByPlaceholderText(/skostorlek/i);
  
  // Input shoe size for the first player
  fireEvent.change(shoeInputs[0], { target: { value: '42' } });
  expect(shoeInputs[0].value).toBe('42');

  // Input shoe size for the second player
  fireEvent.change(shoeInputs[1], { target: { value: '38' } });
  expect(shoeInputs[1].value).toBe('38');
});
