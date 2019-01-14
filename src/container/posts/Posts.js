import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from '../../../node_modules/redux';

import * as actionCreators from './../../store/actionscreators/actionCreators'

import axios from 'axios';
import { Post } from '../../component/post/Post';

import './Posts.css'
import Spinner from '../../component/spinner/Spinner';

import toastr from 'toastr'

class Posts extends Component {

    componentDidMount(){
        axios.get("http://jsonplaceholder.typicode.com/posts")
         .then((res) => {
             this.props.getPosts(res.data.slice(0, 10))
         })
    }

    deletePost = (id) => {
        axios.delete("http://jsonplaceholder.typicode.com/posts/" + id)
         .then((res) => {
            toastr.success("Post Deleted!!")
         }).catch((err) => {
             toastr.error("Post deleted fail!!")
         })
    }

    editPost = (id) => {
        this.props.history.push('/edit-post/' + id)
    }

    render() {
        let posts = <Spinner />

        if(this.props.posts) {
            posts = this.props.posts.map((el) => {
                return <Post edit={() => this.editPost(el.id)} delete={() => this.deletePost(el.id)} key={el.id} {...el} />
            })
        }
        return (
            <div className="container">
                {posts}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts:state.posts,
        isAuth:state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getPosts:(data) => dispatch(actionCreators.loadPosts(data))
    },dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps) (Posts);