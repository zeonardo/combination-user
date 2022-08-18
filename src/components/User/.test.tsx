import React from 'react'
import { render, screen } from '@testing-library/react'
import User from './index'

const mockUser = {
  id: '0',
  gender: 'female',
  name: {
    title: 'title',
    first: 'first',
    last: 'last'
  },
  country: 'country',
  email: 'email',
  picture: {
    large: '/logo192.png',
    medium: '/logo192.png',
    thumbnail: '/logo192.png'
  }
}

test('User loads', () => {
  render(<User user={undefined} loading={true} />)
  expect(screen.getByRole('img', { name: /loading/i })).toBeInTheDocument()//image
});

test('User renders', () => {
  render(<User user={mockUser} loading={false} />)
  expect(screen.getByAltText('first last')).toHaveAttribute('src', '/logo192.png')//image
  expect(screen.getByTitle('(title) first last')).toBeInTheDocument()//name title
  expect(screen.getByText(/first last/i)).toBeInTheDocument()//name
  expect(screen.getByText(/country/i)).toBeInTheDocument()//country
});

