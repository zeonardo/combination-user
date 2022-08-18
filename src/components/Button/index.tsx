import React from 'react'
import StyledButton from './styles'
import ButtonProps from './types'

const Button: React.FC<ButtonProps> = ({ title, value, onClick, active, className, children, ...rest }: ButtonProps) => {
  return (
    <StyledButton
      id="btn-toggle"
      className={`button${active ? ' button--active' : ''}`}
      active={active}
      title={title}
      value={value}
      onClick={onClick}
      type='button'
      name={children}
      aria-controls={`user`}
      tabIndex={0}
    >
      {children}
    </StyledButton>
  )
}

export default Button