import { render, screen, fireEvent } from '@testing-library/react';
import App from '../views/App';
import { MemoryRouter } from 'react-router-dom';

test('navigates between booking and confirmation views', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Booking view content
  expect(screen.getByText(/boka/i)).toBeInTheDocument();

  // Simulate navigation to confirmation view
  fireEvent.click(screen.getByText(/slutför bokning/i));
  expect(screen.getByText(/bekräftelse/i)).toBeInTheDocument();
});
