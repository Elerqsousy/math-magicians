import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/Calculator';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

test('screen to reflect btn keys', () => {
  render(<Calculator />);
  userEvent.click(screen.getByRole('button', { name: /3/i }));
  userEvent.click(screen.getByRole('button', { name: /2/i }));

  expect(screen.getByTestId('screen')).toHaveTextContent('32');
});

it('Match the Calculator component snapshot', () => {
  const tree = renderer.create(<Calculator />).toJSON();

  expect(tree).toMatchSnapshot();
});
