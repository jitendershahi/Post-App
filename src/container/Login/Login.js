import React, { Component } from 'react';
import './Login.css'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

import * as actionCreators from './../../store/actionscreators/actionCreators'

class Login extends Component {

    state = {
        loginForm:{
            email:'',
            password:''
        },
        isSignup:false
    }

    handleValue = (event) => {
        let body = {
            ...this.state.loginForm,
            [event.target.name]:event.target.value
        }
        this.setState({loginForm:body})
    }

    submitLogin = (event) => {
        event.preventDefault()
        let action = this.state.isSignup ? "SignUp" : "SignIn"
        this.props.auth(this.state.loginForm,action)
    }

    changeMode = () => {
        this.setState(prevState => {
            return {
                isSignup: !prevState.isSignup
            }
        })
    }
    
    render() {
        let token = localStorage.getItem('token')
        let redirect = null
        if(token){
            redirect = <Redirect to="/posts" />
        } else {
            redirect = (
                <form >
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" name="email" onChange={(event) => this.handleValue(event)} value={this.state.loginForm.email} className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" name="password" onChange={(event) => this.handleValue(event)} value={this.state.loginForm.password} className="form-control" placeholder="Password" />
                </div>
                <div className="custom-button">
                    <button type="submit" onClick={(event) => this.submitLogin(event)} className="buton">Submit</button>
                    <button type="button" onClick={this.changeMode} className="buton">Switch To {(this.state.isSignup) ? "SignIn" : "SignUp"}</button>
                </div>
            </form>
            )
        }

        // let style = {
        //     margin:'110px auto',
        //     background:'#e6e6e6',
        //     width:'50%'
        // }

        return (
            <div className="container">
                <div className="row">
                <h2>Post App {(this.state.isSignup) ? "SignUp" : "Login"} </h2>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        {redirect}
                        </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth:state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        auth: (data, type) => dispatch(actionCreators.loginSubmit(data, type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);