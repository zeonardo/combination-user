import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Switch from './index'

test('Switch renders', () => {
  render(<Switch data-testid="switch" on="on" off="off" checked={true}/>)
  expect(screen.getByTestId('switch')).toBeInTheDocument()
});

test('Switch checks', () => {
  render(<Switch on="on" off="off" checked={false}/>)

  const checkbox = screen.getByDisplayValue('off')
  expect(checkbox).toHaveAttribute('value', 'off')

  fireEvent.click(checkbox)
  expect(checkbox).toHaveAttribute('value', 'on')
});
