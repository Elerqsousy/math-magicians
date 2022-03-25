import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CalculatorPage from '../pages/CalculatorPage';
/* eslint-disable no-unused-expressions */

test('navbar to have active links', () => {
  render(<CalculatorPage />);
  expect(screen.getByRole('heading', { name: /Let's do some math!/i })).not.toBeNull;
});

it('Match the CalculatorPage component snapshot', () => {
  const tree = renderer.create(<CalculatorPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
