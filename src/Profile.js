import React,{useContext} from 'react'
import {Context} from "./Context"
const Profile = () => {
    const {user} =useContext(Context)
  return (
    <>
      <h1>my profile {user }</h1> 
    </>
  )
}

export default Profile
