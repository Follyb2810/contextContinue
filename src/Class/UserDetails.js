import React,{Component} from 'react'
import UserContext from './ClassContext';
class UserDetails extends Component {
    state = {  } 
    static contextType = userContext
    render() { 
        let userDetails =this.context
        return (
            <div>
<div>Name:{userDetails.name}</div>
<div>Name:{userDetails.age}</div>
            </div>
        );
    }
}
 
export default UserDetails;