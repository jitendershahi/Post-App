import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

class Postadd extends Component {
  render(){
    console.log(this.props.initialValues)
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
        <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <div>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="Title"
            />
          </div>
        </div>
        <div>
          <label>Body</label>
          <div>
            <Field 
            name="body"
            placeholder="body"
            component="textarea"
                />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    );
  }
};

// const mapStateToProps = (state) => {
//   return {
//     initialValues:state.editPost
//   }
// }

const mapStateToProps = (state,ownProps) => {
  var initialValues = {
    title: "shanky",
    body:"sharma"
}
return ({state},initialValues)

}

Postadd = connect(
  mapStateToProps
  // (state,ownProps) => ({
  //   initialValues: state.editPost,
  // })
)(Postadd)

export default reduxForm({
  form:'initializeFromAddPost'
}) (Postadd);