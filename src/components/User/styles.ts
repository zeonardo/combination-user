import styled from 'styled-components'
import config from '../../styles/config';

const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 90vw;
  max-width: 300px;
  min-width: 280px;
  height: 90vh;
  max-height: 300px;
  min-height: 100px;
  border-radius: 1rem;
  overflow: hidden;
  margin: 1rem;
  background-color: ${config.color.white};
  box-shadow: 0 0 50px -10px ${config.color.black};
  cursor: pointer;
  margin: auto 0;/* :D */
  `;
  
export default StyledUser