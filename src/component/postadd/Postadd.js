import React,{Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from '../../../node_modules/redux';
import * as actionCreator from './../../store/actionscreators/actionCreators';
import toastr from 'toastr'
import { withRouter } from 'react-router-dom';


class Postadd extends Component {

  state = {
    isEdit:false,
    postForm:{
      title:'',
      body:''
    }
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
            let body = {
              title:res.data.title,
              body:res.data.body
            }
            this.setState({postForm:body})
        })
    }
}


  handleValue = (event) => {
    let body = {
      ...this.state.postForm,
      [event.target.name]:event.target.value
    }
    this.setState({postForm:body})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let id = this.props.match.params.id
    
    if(!this.state.isEdit){
      axios.post("http://jsonplaceholder.typicode.com/posts",this.state.postForm)
     .then((res) => {
       this.props.addPost(res.data)
       this.props.history.push('/posts')
       toastr.success("Post Added!!")
     }).catch(() => {
       toastr.error("Post Not Added!!")
     })
    } else {
      axios.put("http://jsonplaceholder.typicode.com/posts/" + id ,this.state.postForm)
     .then((res) => {
       this.props.editPost(res.data)
       this.props.history.push('/posts')
       toastr.success("Post Edited!!")
     }).catch(() => {
       toastr.error("Post Not Edited!!")
     })
    }
    
  }

  render(){
    let style = {
      width:'50%',
      margin:'50px auto'
    }

    return (
      <div>
      <h1 style={{textAlign:'center'}}>{(this.state.isEdit) ? 'Edit Post' : 'Add Post'}</h1>
      <div className="container">
        <div className="row" style={style}>
              <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="form-group">
                      <label>Title</label>
                        <input value={this.state.postForm.title} onChange={(event) => this.handleValue(event)} name="title" className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Body</label>
                      <textarea style={{height:'12em'}} name="body" value={this.state.postForm.body} onChange={(event) => this.handleValue(event)} className="form-control"></textarea>
                    </div>
                    <div>
                      <button className="btn btn-success" type="submit" >
                        Submit
                      </button>
                    </div>
            </form>
        </div>
      </div>
      </div>

    );
  }
};

const mapStateToProps = (state) => {
  return {
    post:state.editPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      addPost:(post) => dispatch(actionCreator.addPost(post)),
      editPost:(post) => dispatch(actionCreator.editPost(post))
  },dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (Postadd));