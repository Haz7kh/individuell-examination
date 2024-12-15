import { render, screen, fireEvent } from '@testing-library/react';
import Booking from '../views/Booking';

test('allows user to input date, time, and number of players', () => {
  render(<Booking />);

  // Date input
  const dateInput = screen.getByLabelText(/datum/i);
  fireEvent.change(dateInput, { target: { value: '2024-06-20' } });
  expect(dateInput.value).toBe('2024-06-20');

  // Time input
  const timeInput = screen.getByLabelText(/tid/i);
  fireEvent.change(timeInput, { target: { value: '15:00' } });
  expect(timeInput.value).toBe('15:00');

  // Players input
  const playersInput = screen.getByLabelText(/antal spelare/i);
  fireEvent.change(playersInput, { target: { value: '4' } });
  expect(playersInput.value).toBe('4');
});
