import styled from 'styled-components'
import { StyledSwitchProps } from './types';
import config from '../../styles/config';

const StyledSwitch = styled.span<StyledSwitchProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: ${config.color.white};
  padding: 0.5rem 1rem;
  border-radius: 10px;
  box-shadow: 0 0 50px -10px ${config.color.black};
  label{
    display: block;
    color: ${config.color.gray};
    padding: 0.5rem;
    flex: 1 0 auto;
    cursor: pointer;
  }
  input{
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    + label{
      pointer-events: none;
      + label{
        display: block;
        position: relative;
        color: ${config.color.gray};
        border-radius: 50px;
        width: 2.5rem;
        height: 10px;
        background: currentColor;
        padding: 0;
        transition: all .2s linear;
        flex: 2 0 auto;
        &:after{
          content: '';
          display: block;
          position: absolute;
          top: -5px;
          left: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: currentColor;
          box-shadow: 0 0 3px 0 ${config.color.black};
          margin-left: 0;
          transition: all .2s linear;
        }
        + label{
          pointer-events: auto;
          color: ${config.color.primary};
        }
      }
    }
    &:checked{
      + label{
        pointer-events: auto;
        + label {
          color: ${config.color.primary};
          &:after{
            left: 100%;
            margin-left: -20px;
          }
          + label{
            pointer-events: none;
          }
        }
      }
    }
  }
`;

export default StyledSwitch