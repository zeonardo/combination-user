export type TypeUser = {
  id: string,
  gender: string,
  name: {
    title: string,
    first: string,
    last: string
  },
  country: string,
  email: string,
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  }
}