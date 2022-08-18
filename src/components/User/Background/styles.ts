import styled from 'styled-components'
import { StyledBackgroundProps } from './types';

const StyledBackground = styled.div<StyledBackgroundProps>`
  position: relative;
  display: block;
  width: 100%;
  height: 40%;
  background: ${props => `${props.color} ${props.$image ? `url('${props.$image}')` : ''} ${props.$position || ''}`.trim()};
  background-size: ${props => props.$size ? props.$size : 'initial'};
  margin-bottom: ${props => props.$offset || '10%'};
  pointer-events: none;
  `;
  
export default StyledBackground