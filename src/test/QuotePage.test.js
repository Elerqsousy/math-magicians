import { render, screen } from '@testing-library/react';
import QuotePage from '../pages/QuotePage';

test('navbar to have active links', () => {
  render(<QuotePage />);
  expect(
    screen.getByRole('heading', {
      name: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. --Williams Paul Thruston',
    })
  ).not.toBeNull;
});
