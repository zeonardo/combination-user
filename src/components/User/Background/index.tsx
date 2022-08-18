import React from 'react'
import BackgroundProps from './types'
import StyledBackground from './styles'



const Background = ({ color, image, className, offset, children }: BackgroundProps) => {
  return (
    <StyledBackground className={`user__background${className ? ' ' + className : ''}`} $offset={offset} color={color} $image={image}>
      {children}
    </StyledBackground>
  )
}

export default Background