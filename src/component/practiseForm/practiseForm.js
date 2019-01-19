import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import { connect } from 'react-redux'
import * as actionCreators from './../../store/actionscreators/actionCreators'


class PractiseForm extends Component {
  state = {
    addForm:{
      firstName:'',
      lastName:'',
      email:'',
      favoriteColor:'',
      notes:''
    }
  }

  componentDidMount(){
    // let editForm = {
    //   firstName:'jonas',
    //   lastName:'miller',
    //   email:'jonasmiller@gmail.com',
    //   favoriteColor:'red',
    //   notes:'thanks'
    // }
    axios.get('http://jsonplaceholder.typicode.com/users/1')
    .then((res) => {
      this.props.editPratise(res.data)
      // let editForm = {
      //   firstName:res.data.name,
      //   lastName:res.data.username,
      //   email:res.data.email,
      //   favoriteColor:'ff0000',
      //   notes:res.data.website
      // }
      // console.log(editForm)
      // this.setState({addForm:editForm})
    })
  }

  addHandleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.addForm)
  }

  handleSubmit = (event) => {
    let form = {
      ...this.state.addForm,
      [event.target.name]:event.target.value
    }
    this.setState({addForm:form})
  }

  render(){
    const { pristine, reset, submitting } = this.props
    return (
      <form onSubmit={(e) => this.addHandleSubmit(e)}>
        <div>
          <label>First Name</label>
          <div>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
              onChange={(e) => this.handleSubmit(e)}
              value={this.state.addForm.firstName}
            />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
              value={this.state.addForm.lastName}
              onChange={(e) => this.handleSubmit(e)}
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
              value={this.state.addForm.email}
              onChange={(e) => this.handleSubmit(e)}
            />
          </div>
        </div>
        {/* <div>
          <label>Sex</label>
          <div>
            <label>
              <Field
                name="sex"
                component="input"
                type="radio"
                value={this.state.addForm.sex}
                onChange={(e) => this.handleSubmit(e)}
              />{' '}
              Male
            </label>
          </div>
        </div> */}
        <div>
          <label>Favorite Color</label>
          <div>
            <Field name="favoriteColor" onChange={(e) => this.handleSubmit(e)} value={this.state.addForm.favoriteColor} component="select">
              <option />
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </Field>
          </div>
        </div>
        {/* <div>
          <label htmlFor="employed">Employed</label>
          <div>
            <Field
              name="employed"
              id="employed"
              component="input"
              type="checkbox"
              value={this.state.addForm.employed}
              onChange={(e) => this.handleSubmit(e)}
            />
          </div>
        </div> */}
        <div>
          <label>Notes</label>
          <div>
            <Field name="notes" component="textarea" onChange={(e) => this.handleSubmit(e)} value={this.state.addForm.notes} />
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
    )
  }
}

PractiseForm = reduxForm({
  form: 'PractiseForm'  // a unique identifier for this form
})(PractiseForm)

const mapStateToProps = state => {
  return {
    initialValues:state.practise
  }
}

// var editForm = {
//   firstName:"sdfsf",
//   lastName:"Sdfsdfsf",
//   email:"sdfsdf@gmail.com",
//   favoriteColor:'ff0000',
//   notes:"thanks"
// }

const mapDispatchToProps = dispatch => {
  return {
    editPratise:(data) => dispatch(actionCreators.editPractiseData(data))
  }
}

PractiseForm = connect(
  mapStateToProps,
  mapDispatchToProps               // bind account loading action creator
)(PractiseForm)

export default PractiseForm;

// const mapStateToProps = state => {
//   return {
//     initialValues:state.practise
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     editPratise:(data) => actionCreators.editPractiseData(data)
//   }
// }

// // PractiseForm = reduxForm({
// //   form:'simple'
// // })

// PractiseForm = connect(mapStateToProps,mapDispatchToProps)(PractiseForm)

// export default reduxForm({
//   form:'simple'
// }) (PractiseForm);