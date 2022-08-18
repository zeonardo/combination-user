import imageLogo from '../../assets/logo.svg'
import StyledLogo from './styles'

interface LogoProps extends React.ComponentPropsWithRef<"img"> {
  //props
}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <StyledLogo
      src={imageLogo}
      className="logo"
      alt="User"
      width={212}
      height={150}
      loading="lazy"
      { ...props } />
  );
}

export default Logo;