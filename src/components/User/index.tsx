import StyledUser from "./styles";
import Background from "./Background";
import Image from "./Image";
import Name from "./Name";
import Country from "./Country";
import UserProps from "./types";
import config from "../../styles/config";
import Loader from "../Loader";
import { useEffect } from "react";

const gradient = {
  female: `linear-gradient(0deg, ${config.color.secondary} 0%, ${config.color.black} 100%)`,
  male: `linear-gradient(0deg, ${config.color.primary} 0%, ${config.color.black} 100%)`
}

const User = ({ user, loading, ...rest }: UserProps) => {

  useEffect(()=>{}, [loading])
  const { first= "", last = "", title = "" } = user?.name || {}
  return (
    <StyledUser className="user card" title={`${first} ${last}`.trim()} {...rest}>
      {loading && <Loader/>}
      {!loading && !user && <></>}
      {!loading && user && <>
        <Background color={user.gender === 'female' ? gradient.female : gradient.male} offset="60px">
          <Image
            src={user.picture.medium}
            width="100"
            height="100"
            alt={`${first} ${last}`.trim()}
          />
        </Background>
        <Name first={first} last={last} title={title}/>
        <Country country={user.country}/>
      </>}
    </StyledUser>
  )
  
}

export default User