import React, { Component } from 'react';
import axios from 'axios';

import * as actionCreators from './../../store/actionscreators/actionCreators'
import {connect} from 'react-redux';
import { bindActionCreators } from './../../../node_modules/redux';
import Todo from '../../component/Todo/Todo';

class Todos extends Component {

    componentDidMount(){
        axios.get("http://jsonplaceholder.typicode.com/todos")
         .then((res) => {
             this.props.getTodos(res.data)
         })
        
    }
 
    render() {
        return (
            <div>
                <table width="80%">
                    <thead>
                        <tr style={{height:"4em"}}>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.todos.map((el) => {
                        return <Todo key={el.id} {...el} />
                         })}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos:state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getTodos:(data) => dispatch(actionCreators.getTodos(data))
    },dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps) (Todos);