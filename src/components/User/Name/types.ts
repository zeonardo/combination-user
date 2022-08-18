export default interface NameProps extends React.HTMLAttributes<HTMLElement> {
  first: string,
  last: string,
  title: string
  className?: string
}