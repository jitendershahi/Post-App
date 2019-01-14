import React from 'react';
import './Todo.css'

const Todo = (props) => {
    let button = null

    if(props.completed) {
        button = <button className="btn complete btn-primary">Completed</button>
    } else {
        button = <button className="btn btn-danger">UnCompleted</button>
    }
    return (
            <tr style={{height:"4em"}}>
                <td>{props.title}</td>
                <td>
                   {button} 
                </td>
            </tr>
    );
};

export default Todo; 