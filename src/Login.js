import React,{useState,useContext} from 'react'
import {Context} from './Context'

const Login = () => {

    const {setUser,setProfile}=useContext(Context)
// const [user,setUser]=useState("")
// const [profile,setProfile]=useState(false)
    return (
    <>
    <input type="text"  placeholder="username" onChange={(e)=>setUser(e.target.value)}/>
    <input type="password" placeholder="password" />
        <button onClick={()=>setProfile(true)}>Login</button>

        {/* {profile && <h1>{user}</h1>} */}
    </>
  )
}

export default Login
