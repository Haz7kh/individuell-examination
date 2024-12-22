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

test('reserves correct number of lanes based on player count', async () => {
  render(<Booking />);

  const playersInput = screen.getByLabelText(/antal spelare/i);
  fireEvent.change(playersInput, { target: { value: '8' } });  // Simulate 8 players

  fireEvent.click(screen.getByText(/slutför bokning/i));

  expect(await screen.findByText(/bokningsnummer: B12345/i)).toBeInTheDocument();
  expect(screen.getByText(/2 banor reserverade/i)).toBeInTheDocument();  // 8 players = 2 lanes
});

test('shows error if player count is less than 1', async () => {
  render(<Booking />);

  const playersInput = screen.getByLabelText(/antal spelare/i);
  fireEvent.change(playersInput, { target: { value: '0' } });

  fireEvent.click(screen.getByText(/slutför bokning/i));

  expect(await screen.findByText(/Minst 1 spelare krävs/i)).toBeInTheDocument();
});
