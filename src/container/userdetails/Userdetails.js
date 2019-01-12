import React, { Component } from 'react';
import axios from 'axios';
import UserDetail from '../../component/userDetail/UserDetail';

class Userdetails extends Component {

    state = {
        user:null
    }

    componentDidMount(){
        let id = this.props.match.params.id
        axios.get("http://jsonplaceholder.typicode.com/users/" + id)
         .then((res) => {
             this.setState({
                 user:res.data
             })
         })
    }

    render() {

        return (
            <div>
                <UserDetail {...this.state.user} address={this.state.user} />
            </div>
        );
    }
}

export default Userdetails;