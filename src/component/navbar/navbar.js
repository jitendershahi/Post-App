import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.css';


export const Navbar = (props) => {
   return (
       <div>  
            <ul>
                <li><Link to="/">Posts</Link></li>
                <li><Link to="/add-post">Add Post</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/to-dos">ToDo's</Link></li>
            </ul>
       </div>
   )
}

export default Navbar;