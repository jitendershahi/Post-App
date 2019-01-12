import React, { Component } from 'react';

class Login extends Component {
    
    render() {
        let style = {
            margin:'110px auto',
            background:'#e6e6e6',
            width:'50%'
        }

        return (
            <div className="container">
                <div className="row" style={style}>
                <h2>Post App Login</h2>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form>
                        <div className="form-group">
                            <label >Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" className="form-control" name="password" id="password" placeholder="Password" />
                        </div>
                        <div className="form-check">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        
                        </form>
                        </div>
                </div>
            </div>
        );
    }
}

export default Login;