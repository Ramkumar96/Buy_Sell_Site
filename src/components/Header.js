import React from 'react';
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


const Header = () => (
    <>
        <div className="container-fluid header-top-bar">
            <div className="nav-bar header-bar">
                <div className="col-md-6 header-top-left" activeKey="/home">
                    <i class="fa fa-phone" style={{ fontSize: '20px', color: '#ffffff', paddingRight: '8px' }}></i>
                    <p >+1 609-666-4476</p>
                    <i class="fa fa-envelope" style={{ fontSize: '20px', color: '#ffffff', paddingRight: '8px' }}></i>
                    <p>buyAndsell@gmail.com</p>
                </div>
                <div className="col-md-6 header-top-right">
                    <i class="fa fa-compass" style={{ fontSize: '20px', color: '#ffffff', paddingRight: '8px' }}></i>
                    <p>Track my order</p>
                    <span> <i class="fa fa-user-alt" style={{ fontSize: '20px', color: '#ffffff', paddingRight: '8px' }}></i></span>
                    <NavDropdown title="My Account" id="collasible-nav-dropdown" className="nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Sign up</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Sign in</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">View Profile</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </div>
        </div >



        <div className="row logo-row">
            <div className="col-md-2">
                <a href="">Buy&Sell Portal</a>
            </div>

            <div className="col-md-6 input-container">
                <form>
                    <InputGroup className="mb-3 justify-content-center input-box">
                        <Icon icon={folderOpenOutlined} style={{ color: '#3d3d3d', fontSize: '30px' }} />
                        <DropdownButton
                            as={InputGroup.Prepend}
                            // variant="outline-secondary"
                            title="Category"
                            id="input-group-dropdown-1"
                            className="drop"
                        >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" placeholder="Search your items here..." style={{ border: 'none' }} />
                        <Icon icon={bxSearch} style={{ color: '#3d3d3d', fontSize: '30px' }} />
                    </InputGroup>
                </form>
            </div>
           
            <div className="col-md-4 card-left">
                <a href="">
                    <Icon icon={shoppingCartOutlined} style={{ fontSize: '30px' }} />
                </a>
                <a href="">
                    <Icon icon={heartOutlined} style={{ color: '#3d3d3d', fontSize: '31px' }} />
                </a>
                <button className="button-header">SUBSCRIBE</button>
            </div>
        </div>

        <Navbar collapseOnSelect expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="links" >
                <Nav>
                    <Nav.Link href="/home" className="nav-link">WOMEN'S</Nav.Link>
                    <Nav.Link eventKey="link-1" className="nav-link">MEN'S</Nav.Link>
                    <Nav.Link eventKey="link-2" className="nav-link">KID'S</Nav.Link>
                    <Nav.Link href="/home" className="nav-link">SHOES</Nav.Link>
                    <Nav.Link eventKey="link-1" className="nav-link">CLOTHING</Nav.Link>
                    <Nav.Link eventKey="link-2" className="nav-link">ACCESSORIES</Nav.Link>
                    <Nav.Link eventKey="link-1" className="nav-link">BAGS</Nav.Link>
                    <Nav.Link eventKey="link-1" className="nav-link">ELECTRONICS</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
)



export default Header;