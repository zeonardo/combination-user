import React, { useEffect, useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from './index'

const ButtonController = () => {
  // const [isLoading, setIsloading] = useState<boolean|undefined>(undefined)
  const [active, setActive] = useState<boolean>(true)
  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setActive(!Boolean(event.currentTarget.value))

  return <Button value={String(!active)} disabled={false} active={active} onClick={onClick}>Test Button</Button>
}

test('Button renders', () => {
  render(
    <Button
      active={true}
      value="true"
      disabled={false}
      onClick={()=>{}}
    >
      Test Button
    </Button>
  )
  expect(screen.getByText('Test Button')).toBeInTheDocument()
});

test('Button clicks', () => {
  render(<ButtonController />)

  const button = screen.getByRole('button', { name: /test button/i })
  expect(button).toHaveAttribute('value', 'false')

  fireEvent.click(button)
  expect(button).toHaveAttribute('value', 'true')
});
