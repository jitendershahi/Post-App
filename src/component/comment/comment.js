import React from 'react';

import './comment.css'

const Comment = (props) => {
    return (
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.body}</td>
            </tr>
    );
};

export default Comment;