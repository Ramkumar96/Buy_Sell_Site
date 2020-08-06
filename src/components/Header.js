import React, { Component } from 'react';
import '../css/header.css';
import { Navbar, Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown'
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
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

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

// import SignupModal from './SignupModal'

const Header = () => {
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
                            <NavDropdown.Item ><Link to="/login">Login / Register</Link></NavDropdown.Item>

                            {/* <NavDropdown.Item href="#action/3.2">Sign in</NavDropdown.Item> */}
                            <NavDropdown.Item>View Profile</NavDropdown.Item>
                            <NavDropdown.Item>Log out</NavDropdown.Item>
                        </NavDropdown>
                        {/* <p>My Account</p> */}
                        {/* </span> */}
                    </div>

                </div>
            </div>

            <div className="row logo-row d-flex justify-content-between">
                <div className="header-top-left-mobile col-xs-12">
                    <div className="hamburger-menu"></div>
                    <div className="col-md-3">
                        <a href="">Buy&Sell Portal</a>
                    </div>
                    <div className="header-top-right-mobile">
                        <a href="">
                            <Icon icon={shoppingCartOutlined} className="cart-icon" style={{ color: '#3d3d3d', fontSize: '30px', marginRight: '1em', marginTop: '0.5em' }} />
                        </a>
                    </div>
                </div>


                <div className="col-xs-12 col-md-5 input-container">
                    <form>
                        <InputGroup className="mb-3 input-box">
                            {/* <Icon icon={folderOpenOutlined} style={{ color: '#3d3d3d', fontSize: '30px',  }} /> */}
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
                            <FormControl aria-describedby="basic-addon1" placeholder="Search your items" style={{ border: 'none' }} className="searchTxt" />
                            {/* <span className="d-flex justify-content-end ">
                                <Icon icon={bxSearch} className="d-flex justify-content-end searchIcon" style={{ color: '#3d3d3d', fontSize: '25px', marginTop: '6px', }} />
                            </span> */}

                        </InputGroup>
                    </form>
                </div>

                <div className="col-md-4 icons-right">
                    <a href="">
                        <Icon icon={shoppingCartOutlined} className="cart-icon" style={{ color: '#3d3d3d', fontSize: '30px', marginRight: '1em', marginTop: '0.5em' }} />
                    </a>
                    <a href="">
                        <Icon icon={heartOutlined} style={{ color: '#3d3d3d', fontSize: '31px', marginRight: '1em', marginTop: '0.5em' }} />
                    </a>
                    <Link to="/add-product">
                        <button className="button-header">Start Selling</button>
                    </Link>

                </div>
            </div>

            <div className="categories-section">
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
            </div>

        </>
    )
}


export default Header;