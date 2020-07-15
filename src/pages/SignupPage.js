import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
    render(){
        return(
            <form>
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 d-flex flex-column signInContainer">
                        <h3 className="text-center">Sign up</h3>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" className="form-control" placeholder="Eg: Harish Venkat" />
                        </div>
                        <div className="form-group">
                            <label>Mobile Number</label>
                            <input type="text" className="form-control" placeholder="Eg: 077 1234567" />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="abc@gmail.com" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="*********" />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="*********" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">I agree to Terms & conditions</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">SIGN UP</button>
                        {/* <p className="forgot-password text-right">
                            <a href="#">Forgot password?</a>
                        </p> */}

                        <div className="signup text-center">
                           <p>Already have an account? <a href="#"><Link to="/LoginPage"><u>LOGIN</u></Link></a></p> 
                        </div>
                    </div>
                </div>

            </form>
        )
    }
}

export default LoginPage;