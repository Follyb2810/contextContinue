import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Profile from './Profile';
import React,{useState} from 'react'
import {Context} from "./Context"
import ClassApp from './Class/ClassApp';
// import UserContext  from "./Class/ClassContext"
function App() {
  const [profile,setProfile]=useState(false)
  const [user,setUser]=useState("")
  return (
    <div className="App">
      <Context.Provider  value={{user,setUser,setProfile}} >
         {profile?<Profile/>
          : <Login/>} 
      </Context.Provider>
      <ClassApp/>
    </div>
  );
}

export default App;
