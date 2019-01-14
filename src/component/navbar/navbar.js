import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './navbar.css';
import Swal from 'sweetalert2'
import { withRouter } from 'react-router-dom'

 class Navbar extends Component {

     logoutClick = () => {
         Swal({
             title: 'Logout?',
             text: "Are you sure, You want to Logout?",
             type: 'warning',
             showCancelButton: true,
             confirmButtonColor: '#3085d6',
             cancelButtonColor: '#d33',
             confirmButtonText: 'Yes'
         }).then((result) => {
             if (result.value) {
                 this.props.history.replace("/logout")
             }
         })
     }

    render(){
        let token = localStorage.getItem('token')
        let nav = null
    
        if(token){
            nav = (
                <ul className="header">
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/add-post">Add Post</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/to-dos">ToDo's</Link></li>
                    <li style={{float:'right',marginRight:'35px'}}><button className="btns" onClick={this.logoutClick}>Logout</button></li>
                </ul>
            )
        }
        return (
                <div className="head_section">  
                  {nav}
                </div>
            )
    }
}


export default withRouter(Navbar);