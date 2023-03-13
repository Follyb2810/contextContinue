import React, { Component } from 'react'
import UserContext  from "./ClassContext"
class App extends Component {
    state = {  } 
    render() { 
        let user ={name:"user",age:20}
        return (
            <UserContext.Provider value={user}>

            <div>Context sample</div>
            </UserContext.Provider>
        );
    }
}
 
export default App;