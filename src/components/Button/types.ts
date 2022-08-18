import React, { ButtonHTMLAttributes } from "react";

export default interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  active: boolean,
  children: string
}