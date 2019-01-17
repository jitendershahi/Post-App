import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

// import Posts from '../posts/Posts';
// import comments from '../comments/comments';
// import Users from '../users/Users';
// import Userdetails from '../userdetails/Userdetails';
// import Todos from '../todos/Todos';
// import Postadd from '../../component/postadd/Postadd';
import Navbar  from '../../component/navbar/navbar';
// import Logout from '../logout/Logout';
// import {connect} from 'react-redux';
const Login = lazy(() => import('../Login/Login'));
const Posts = lazy(() => import('../posts/Posts'));
const comments = lazy(() => import('../comments/comments'));
const Users = lazy(() => import('../users/Users'));
const Todos = lazy(() => import('../todos/Todos'));
const Userdetails = lazy(() => import('../userdetails/Userdetails'));
const Postadd = lazy(() => import('../../component/postadd/Postadd'));
const Logout = lazy(() => import('../logout/Logout'));
// import Login from '../Login/Login';


class Routes extends Component {

   
    render() {
        let token = localStorage.getItem('token')
        let approutes = (
                <Suspense fallback={<div style={{textAlign:'center'}}>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Redirect to="/"/>
                    </Switch>
                </Suspense>
        )
        if(token) {
            approutes = (
                <Suspense fallback={<div style={{textAlign:'center'}}>Loading...</div>}>
                    <Switch>
                        <Route path="/posts" component={Posts} />
                        <Route path="/add-post" component={Postadd} />
                        <Route exact path="/users/:id" component={Userdetails} />
                        <Route path="/users" component={Users} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/to-dos" component={Todos} />
                        <Route path="/edit-post/:id" component={Postadd} />
                        <Route exact path="/post/:id" component={comments} />
                        <Redirect to="/posts"/>
                    </Switch>   
                </Suspense>
            )
        }
        return (
            <div>
                <Navbar  />
                <Switch>
                    {approutes}
                    {/* <Route render={() => <h1>Page not Found?</h1>}/> */}
                </Switch>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         isAuthenticated:state.auth.token !== null
//     }
// }

export default Routes