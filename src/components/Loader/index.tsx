import config from '../../styles/config'
import StyledLoader from './styles'

const Loader = (props: React.ComponentPropsWithRef<'svg'> ) => {
  return (
    <StyledLoader role="img" name="loading" aria-label="loading" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" {...props}>
      <title>loading</title>
      <circle cx="50" cy="50" fill="none" stroke={config.color.primary} strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
    </StyledLoader>
  )
}

export default Loader