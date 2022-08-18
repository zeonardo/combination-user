export default interface ContentProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode | React.ReactNode[],
  background?: string,
  align?: 'top' | 'center' | 'bottom'
}

export interface StyledContentProps extends React.HTMLAttributes<HTMLElement> {
  $background?: string,
  $align?: string
}