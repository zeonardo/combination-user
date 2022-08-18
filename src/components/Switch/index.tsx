import React, { useCallback, useEffect, useId, useRef, useState } from 'react'
import StyledSwitch from './styles'
import SwitchProps from './types'

const Switch = ({ on, off, checked, defaultChecked, onChange, ...rest }: SwitchProps): JSX.Element => {
  const id = useId()
  const refCheckbox = useRef<HTMLInputElement>(null)
  const [activeCheck, setActiveCheck] = useState(
    defaultChecked === undefined ? checked || false : defaultChecked,
  )

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement> | boolean) => {
    if(typeof event === 'boolean'){
      setActiveCheck(event)  
    }
    else {
      setActiveCheck(event.currentTarget.checked)
    }
    // eslint-disable-next-line
  }, [])

  const handleKey = useCallback((event: React.KeyboardEvent<HTMLLabelElement>) => {
    if(null !== refCheckbox.current
      && ['Enter', 'Space', ' '].some(key => key === event.key)){
      (onChange || handleChange)(!refCheckbox.current.checked)
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (checked !== undefined) setActiveCheck(checked)
  }, [checked])

  return (
    <StyledSwitch
      className={`switch${activeCheck ? ' switch--active' : ''}`}
      $checked={activeCheck}
      {...rest}
    >
      <input id={id} ref={refCheckbox} value={activeCheck ? on : off} type="checkbox" checked={activeCheck} onChange={onChange || handleChange} tabIndex={-1}/>
      <label htmlFor={id} onKeyDown={handleKey} tabIndex={0}>{off}</label>
      <label htmlFor={id} onKeyDown={handleKey} aria-hidden="true" className="switch__slider" title={activeCheck ? off : on}></label>
      <label htmlFor={id} onKeyDown={handleKey} tabIndex={0} className="switch__label switch__label--on">{on}</label>
    </StyledSwitch>
  )
}

export default Switch