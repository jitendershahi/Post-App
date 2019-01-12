import React from 'react';

const Todo = (props) => {
    let button = null

    if(props.completed) {
        button = <button className="btn btn-primary">Completed</button>
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