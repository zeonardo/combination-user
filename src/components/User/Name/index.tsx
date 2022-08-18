import React from 'react'
import NameProps from './types'
import StyledName from './styles'

const Name = ({ first, last, title, className }: NameProps) => {
  return (
    <StyledName
      className={`user__name${className ? ' ' + className : ''}`}
      title={`${title ? `(${title}) ` : ''}${first} ${last}`.trim()}
    >
      {`${first} ${last}`.trim()}
    </StyledName>
  )
}

export default Name