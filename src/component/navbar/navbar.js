import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.css';


export const Navbar = (props) => {
    let token = localStorage.getItem('token')
    let nav = null

    if(token){
        nav = (
            <ul>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/add-post">Add Post</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/to-dos">ToDo's</Link></li>
                <li style={{float:'right',marginRight:'35px'}}><Link to="/logout">Logout</Link></li>
                {/* <li style={{float:'right',marginRight:'35px'}}><Link to="/login">Login</Link></li> */}
        </ul>
        )
    }
   return (
       <div>  
           {nav}
       </div>
   )
}

export default Navbar;