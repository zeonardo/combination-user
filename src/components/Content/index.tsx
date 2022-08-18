import StyledContent from "./styles";
import ContentProps from "./types";

const Content: React.FC<ContentProps> = ({ children, background, align, ...rest }) => {
  return (
    <StyledContent className='content' $background={background} $align={align} { ...rest }>
      {children}
    </StyledContent>
  );
}

export default Content;