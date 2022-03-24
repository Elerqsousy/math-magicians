import { render, screen } from '@testing-library/react'
import CalculatorPage from '../pages/CalculatorPage'


test('navbar to have active links', () => {
  render(<CalculatorPage />)
  expect(screen.getByRole('heading', {name: /Let's do some math!/i})).not.toBeNull
})