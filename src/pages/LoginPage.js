import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../css/login.css';

class LoginPage extends Component {
    render(){
        return(
            <form>
                <div className="row">
                    <div className="col-md-6 leftBanner">
                        <img src={require('../assets/images/ecommerce.png')} />
                    </div>
                    <div className="col-md-6 d-flex flex-column signInContainer">
                        <h3 className="text-center">Welcome Back !</h3>
                        
                        <div className="form-group inputGroup">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="abc@gmail.com" />
                        </div>

                        <div className="form-group inputGroup">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="*********" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">LOGIN</button>
                        <p className="forgot-password text-right">
                            <a href="#">Forgot password?</a>
                        </p>

                        <div className="signup text-center">
                           <p>Already have an account? <a href="#"><Link to="/signup"><u>SIGNUP</u></Link></a></p> 
                        </div>
                    </div>
                </div>

            </form>
        )
    }
}

export default LoginPage;