import React, { Component } from 'react';
import Postadd from '../../component/postadd/Postadd';
import axios from 'axios';
import { connect } from 'react-redux';

import './AddPost.css'
import { bindActionCreators } from '../../../node_modules/redux';
import * as actionCreator from './../../store/actionscreators/actionCreators';

import toastr from 'toastr'


class AddPost extends Component {

    state = {
        isEdit:false
    }

    componentDidMount(){
        let path = this.props.match.path
        path = path.split('/')[1]
        if(path === "edit-post"){
            this.setState({isEdit:true})
        }

        if(path === "edit-post") {
            axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id)
            .then((res) => {
                this.props.editPost(res.data)
            })
        }
      
    }

    submit = (values) => {
        let body = {
            title: values.title,
            body: values.body,
            userId: 1
        }
        axios.post("https://jsonplaceholder.typicode.com/posts",body)
         .then((res) => {
             toastr.success("Post Added Successfully!!")
             this.props.addPost(res.data)
             this.props.history.push('/')
         }).catch((err) => {
             console.log(err)
         })
    }

    render() {
        return (
            <div style={{ padding: 15 }}>
                <h2>{(this.state.isEdit) ? "Edit Post" : "Add Post"}</h2>
                <Postadd {...this.state.post} onSubmit={this.submit}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addPost:(post) => dispatch(actionCreator.addPost(post)),
        editPost:(post) => dispatch(actionCreator.editPost(post))
    },dispatch)
}

export default connect(null,mapDispatchToProps) (AddPost);