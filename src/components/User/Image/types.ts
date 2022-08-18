export default interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string,
  alt: string,
  height?: string,
  width?: string,
}