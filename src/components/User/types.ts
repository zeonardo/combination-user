import { TypeUser } from "../../types";

export default interface UserProps {
  user: TypeUser | undefined,
  loading?: boolean,
}