import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Btns from '../components/Btns';

test('btn AC to be renders when btns component renders', () => {
  render(<Btns />);
  expect(screen.getByText('AC')).not.toBeNull();
});

it('Match the Button component snapshot', () => {
  const tree = renderer.create(<Btns />).toJSON();

  expect(tree).toMatchSnapshot();
});
