import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HomePgae from '../pages/HomePage';
/* eslint-disable no-unused-expressions */

test('testing home page heading', () => {
  render(<HomePgae />);
  expect(screen.getByRole('heading', { name: /Welcome to our page!/i })).not.toBeNull;
});

it('Match the Home component snapshot', () => {
  const tree = renderer.create(<HomePgae />).toJSON();

  expect(tree).toMatchSnapshot();
});

