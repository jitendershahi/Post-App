import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from '../../../node_modules/redux';

import * as actionCreators from './../../store/actionscreators/actionCreators'
import Comment from '../../component/comment/comment';

import './comments.css'
import Spinner from '../../component/spinner/Spinner';

class Comments extends Component {
    state =  {
        postId:null
    }
    
    componentDidMount(){
        let postId = this.props.match.params.id
        axios.get("http://jsonplaceholder.typicode.com/posts/" +  postId + "/comments")
         .then((res) => {
             this.props.getComments(res.data)
         })
         this.setState({postId:postId})
    }

    render() {
        let comments = <Spinner />

        if(this.props.getCommentsPerPost){
            comments = this.props.getCommentsPerPost.map((el) => {
                return <Comment key={el.id} {...el} />
            })
        }
        return (
            <div>
                <h1 style={{textAlign: 'center',margin: '20px'}}>Comments of Post:{this.state.postId}</h1>
                <table width="90%" className="table" >
                <thead className="thead">
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {comments}
                </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getCommentsPerPost:state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getComments:(data) => dispatch(actionCreators.loadComments(data))
    },dispatch)
}

export default  connect(mapStateToProps,mapDispatchToProps) (Comments);