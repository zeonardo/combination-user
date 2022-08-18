import styled from 'styled-components'
import config from '../../../styles/config';
import ImageProps from './types';

const StyledImage = styled.img<ImageProps>`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  display: block;
  height: ${props => props.height ? props.height : 'auto'};
  width: ${props => props.width ? props.width : '100%'};
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${config.color.white}
  `;
  
export default StyledImage