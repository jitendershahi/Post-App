import React, { Component } from 'react';
import axios from 'axios';
import { bindActionCreators } from '../../../node_modules/redux';
import * as actionCreators from './../../store/actionscreators/actionCreators'

import { connect } from 'react-redux';
import './Users.css'
import Userlist from '../../component/userlist/userlist';


class Users extends Component {

    componentDidMount(){
        axios.get("http://jsonplaceholder.typicode.com/users")
         .then((res) => {
             this.props.getUsers(res.data)
         })
    }

    render() {
        return (
            <div>
                <table width="90%">
                    <thead>
                        <tr style={{height:"4em"}}>
                            <th>Sr No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Company</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((el) => {
                            return <Userlist key={el.id} {...el} />
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users:state.users
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getUsers:(data) => dispatch(actionCreators.getUsers(data))
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);