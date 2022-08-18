import styled from 'styled-components'
import ButtonProps from './types';
const config = require("../../styles/config").default

const StyledButton = styled.button<ButtonProps>`
  display: block;
  color: ${config.color.white};
  height: 40px;
  padding: 0 2rem;
  border: none;
  border-radius: 0.5rem;
  background: ${config.color.black};
  font-size: 1rem;
  &:disabled{
    background: ${config.color.gray};
    cursor: default;
  }
  `;

export default StyledButton