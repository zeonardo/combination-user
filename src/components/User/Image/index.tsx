import React from 'react'
import StyledImage from './styles'
import ImageProps from './types'

const Image: React.FC<ImageProps> = ({ src, alt, height, width, className }) => {
  return (
    <StyledImage
      className={`user__image${className ? ' ' + className : ''}`}
      src={src}
      alt={alt}
      width={width ? width : undefined}
      height={height ? height : undefined}
      loading="lazy"
    />
  )
}

export default Image