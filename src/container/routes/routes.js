import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Posts from '../posts/Posts';
import comments from '../comments/comments';
import AddPost from '../AddPost/AddPost';
import Users from '../users/Users';
import Userdetails from '../userdetails/Userdetails';
import Todos from '../todos/Todos';
import Login from '../Login/Login';

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Posts} />
                    <Route exact path="/login" component={Login} />
                    <Route path="/add-post" component={AddPost} />
                    <Route exact path="/users/:id" component={Userdetails} />
                    <Route path="/users" component={Users} />
                    <Route path="/to-dos" component={Todos} />
                    <Route path="/add-post/:id" component={AddPost} />
                    <Route exact path="/post/:id" component={comments} />
                    <Route render={() => <h1>Page not Found?</h1>}/>
                </Switch>
            </div>
        );
    }
}

export default Routes;