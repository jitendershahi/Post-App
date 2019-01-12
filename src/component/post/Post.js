import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

export const Post = (props) => {
    return (
        <div className="card-icon">
        <i onClick={props.edit} className="fas fa-edit"></i>
        <i onClick={props.delete} className="fas fa-trash"></i>
        <Link to={"/post/" + props.id}>
            <div className="card">
                <h1>{props.title}</h1>
                <p>{props.title}</p>
            </div>
        </Link>
        </div>
    )
}

export default Post;