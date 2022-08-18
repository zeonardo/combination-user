import React from "react";

export default interface SwitchProps extends Omit<React.HtmlHTMLAttributes<HTMLElement>, 'onChange'> {
  on: string,
  off: string,
  checked: boolean,
  defaultChecked?: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | boolean) => void
}

export interface StyledSwitchProps {
  $checked: boolean
}