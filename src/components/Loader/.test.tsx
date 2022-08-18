import React from 'react'
import { render, screen } from '@testing-library/react'
import Loader from './index'

test('Loader renders', () => {
  render(<Loader data-testid="loader" />)
  expect(screen.getByTestId('loader')).toBeInTheDocument()
});
