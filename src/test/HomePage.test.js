import { render, screen } from '@testing-library/react'
import HomePgae from '../pages/HomePage'

test('navbar to have active links', () => {
  render(<HomePgae />)
  expect(screen.getByRole('heading', {name: /Welcome to our page!/i})).not.toBeNull
})