import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import QuotePage from '../pages/QuotePage';
/* eslint-disable no-unused-expressions */

test('navbar to have active links', () => {
  render(<QuotePage />);
  expect(
    screen.getByRole('heading', {
      name: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. --Williams Paul Thruston',
    }),
  ).not.toBeNull;
});


it('Match the Quote component snapshot', () => {
  const tree = renderer.create(<QuotePage />).toJSON();
  expect(tree).toMatchSnapshot();
});