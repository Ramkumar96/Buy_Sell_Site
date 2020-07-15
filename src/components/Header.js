import React, { Component } from 'react';
import '../css/header.css';
import { Navbar, Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown'
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';
import phoneAlt from '@iconify/icons-fa-solid/phone-alt';
import baselineEmail from '@iconify/icons-ic/baseline-email';
import compassOutlined from '@iconify/icons-ant-design/compass-outlined';
import bxsUser from '@iconify/icons-bx/bxs-user';
import baselineNotificationsNone from '@iconify/icons-ic/baseline-notifications-none';
import heartOutlined from '@iconify/icons-ant-design/heart-outlined';
import shoppingCartOutlined from '@iconify/icons-ant-design/shopping-cart-outlined';
import folderOpenOutlined from '@iconify/icons-ant-design/folder-open-outlined';
import bxSearch from '@iconify/icons-bx/bx-search';
import bxSupport from '@iconify/icons-bx/bx-support';
import faqIcon from '@iconify/icons-wpf/faq';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

// import SignupModal from './SignupModal'


const SigninModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <form>
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 d-flex flex-column signInContainer">
                        <h3 className="text-center">Sign In</h3>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="abc@gmail.com" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="*********" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">LOGIN</button>
                        <p className="forgot-password text-right">
                            <a href="#">Forgot password?</a>
                        </p>

                        <div className="signup text-center">
                           <p>Don't have an account? <a href="#" onClick={() => setModalShow(true)}><u>SIGNUP</u></a></p> 
                        </div>
                    </div>
                </div>

            </form>
        </Modal>
    )
}

const SignupModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
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
                           <p>Already have an account? <a href="#" onClick={() => setModalShow(true)}><u>LOGIN</u></a></p> 
                        </div>
                    </div>
                </div>

            </form>
        </Modal>
    )
}


const Header = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div className="container-fluid header-top-bar">
                <div className="nav-bar header-bar">
                    <div className="col-md-6 header-top-left" activeKey="/home">
                        <Icon icon={bxSupport} style={{ color: '#ffffff', fontSize: '15px' }} />
                        <span className="headerTopText">
                            <p>Help & Support</p>
                        </span>

                        <Icon icon={faqIcon} style={{ color: '#ffffff', fontSize: '14px' }} />
                        <span className="headerTopText">
                            <p>FAQ</p>
                        </span>
                    </div>
                    <div className="col-md-6 header-top-left d-flex justify-content-end" activeKey="/home">
                        <Icon icon={compassOutlined} style={{ color: '#ffffff', fontSize: '17px' }} />
                        <span className="headerTopText">
                            <p>Track my order</p>
                        </span>

                        <Icon icon={bxsUser} style={{ color: '#ffffff', fontSize: '18px' }} />
                        {/* <span className="headerTopText"> */}
                        <NavDropdown title="My Account" id="collasible-nav-dropdown" className="nav-dropdown dropdown-text" style={{ color: 'white' }}>
                            <NavDropdown.Item onClick={() => setModalShow(true)}>Login / Register</NavDropdown.Item>
                            <SigninModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                            {/* <NavDropdown.Item href="#action/3.2">Sign in</NavDropdown.Item> */}
                            <NavDropdown.Item>View Profile</NavDropdown.Item>
                        </NavDropdown>
                        {/* <p>My Account</p> */}
                        {/* </span> */}
                    </div>

                </div>
            </div>

            <div className="row logo-row">
                <div className="col-md-3">
                    <a href="">Buy&Sell Portal</a>
                </div>

                <div className="col-md-5 input-container">
                    <form>
                        <InputGroup className="mb-3 justify-content-center input-box">
                            <Icon icon={folderOpenOutlined} style={{ color: '#3d3d3d', fontSize: '30px', marginTop: '2px' }} />
                            <DropdownButton
                                as={InputGroup.Prepend}
                                // variant="outline-secondary"
                                title="Category"
                                id="input-group-dropdown-1"
                                className="drop"
                            >
                                <Dropdown.Item href="#">Women's</Dropdown.Item>
                                <Dropdown.Item href="#">Men's</Dropdown.Item>
                                <Dropdown.Item href="#">Kids</Dropdown.Item>
                                <Dropdown.Item href="#">Shoes</Dropdown.Item>
                                <Dropdown.Item href="#">Clothing</Dropdown.Item>
                                <Dropdown.Item href="#">Accessories</Dropdown.Item>
                                <Dropdown.Item href="#">Bags</Dropdown.Item>
                                <Dropdown.Item href="#">Electronics</Dropdown.Item>
                            </DropdownButton>
                            <div className="vl"></div>
                            <FormControl aria-describedby="basic-addon1" placeholder="Search your items here..." style={{ border: 'none' }} className="searchTxt" />
                            <span className="d-flex justify-content-end ">
                                <Icon icon={bxSearch} className="d-flex justify-content-end searchIcon" style={{ color: '#3d3d3d', fontSize: '25px', marginTop: '6px', }} />
                            </span>

                        </InputGroup>
                    </form>
                </div>

                <div className="col-md-4 icons-right d-flex justify-content-end">
                    <a href="">
                        <Icon icon={shoppingCartOutlined} className="cart-icon" style={{ color: '#3d3d3d', fontSize: '30px', marginRight: '1em', marginTop: '0.5em' }} />
                    </a>
                    <a href="">
                        <Icon icon={heartOutlined} style={{ color: '#3d3d3d', fontSize: '31px', marginRight: '1em', marginTop: '0.5em' }} />
                    </a>
                    <button className="button-header">Start Selling</button>
                </div>
            </div>

            <Navbar collapseOnSelect expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="links" >
                    <Nav>
                        <Nav.Link href="/home" className="category-link">WOMEN'S</Nav.Link>
                        <Nav.Link eventKey="link-1" className="category-link">MEN'S</Nav.Link>
                        <Nav.Link eventKey="link-2" className="category-link">KID'S</Nav.Link>
                        <Nav.Link href="/home" className="category-link">SHOES</Nav.Link>
                        <Nav.Link eventKey="link-1" className="category-link">CLOTHING</Nav.Link>
                        <Nav.Link eventKey="link-2" className="category-link">ACCESSORIES</Nav.Link>
                        <Nav.Link eventKey="link-1" className="category-link">BAGS</Nav.Link>
                        <Nav.Link eventKey="link-1" className="category-link">ELECTRONICS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}


export default Header;