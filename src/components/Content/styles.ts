import styled from 'styled-components'
import { StyledContentProps } from './types';

const StyledContent = styled.main<StyledContentProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.$align === 'top' ? 'flex-start' : props.$align === 'bottom' ? 'flex-end' : 'center'};
  align-items: center;
  background-color: rgba(0,0,0,.03);
  padding: 1rem;
  height: 100%;
  width: 100%;
  flex: 1 1 auto;
  &:after{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: ${({ $background }) => $background ? 'block': 'none'};
    background: ${({ $background }) => $background ? `url('${$background}')`: undefined} no-repeat center;
    background-size: cover;
    opacity: 0.3;
    z-index: -1;
  }
  `;
export default StyledContent