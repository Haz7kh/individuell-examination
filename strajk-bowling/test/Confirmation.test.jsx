import { render, screen, fireEvent } from '@testing-library/react';
import Booking from '../src/views/Booking';
import { rest } from 'msw';
import { server } from './setup';

test('submits reservation and shows booking confirmation', async () => {
  render(<Booking />);

  // Fill in inputs
  fireEvent.change(screen.getByLabelText(/antal spelare/i), { target: { value: '4' } });
  fireEvent.click(screen.getByText(/slutför bokning/i));

  // Check confirmation content
  expect(await screen.findByText(/bokningsnummer: B12345/i)).toBeInTheDocument();
  expect(screen.getByText(/580 kr/i)).toBeInTheDocument();
});
