import { render, screen } from '@testing-library/react';
import Btns from '../components/Btns';

test('btn AC to be renders when btns component renders', () => {
  render(<Btns />);
  expect(screen.getByText('AC')).not.toBeNull();
});
