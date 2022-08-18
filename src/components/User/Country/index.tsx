import React from 'react'
import CountryProps from './types'
import StyledCountry from './styles'


const Country = ({ country, className }: CountryProps) => {
  return (
    <StyledCountry className={`user__country${className ? ' ' + className : ''}`}>🌍 {country}</StyledCountry>
  )
}

export default Country