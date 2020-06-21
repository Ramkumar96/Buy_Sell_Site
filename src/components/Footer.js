import React from 'react';
import '../css/footer.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Icon, InlineIcon } from '@iconify/react';
import facebookWithCircle from '@iconify/icons-entypo-social/facebook-with-circle';
import twitterCircleFilled from '@iconify/icons-ant-design/twitter-circle-filled';
import linkedinWithCircle from '@iconify/icons-entypo-social/linkedin-with-circle';


const Footer = () => (
    <div className="container-fluid footerComponent">
        <div className="container">
        <div className="row footer-content">
                <div className="col-md-3 d-flex flex-column">
                    <p>Customer Service</p>
                    <a>Shipping Rates</a>
                    <a>Return Policy</a>
                    <a>FAQs</a>
                    <a>Contact info</a>
                </div>
                <div className="col-md-3 d-flex flex-column">
                    <p>Shopping</p>
                    <a>Women's</a>
                    <a>Men's</a>
                    <a>Kids</a>
                    <a>Brands</a>
                </div>
                <div className="col-md-3 d-flex flex-column">
                    <p>My Account</p>
                    <a>Login/Register</a>
                    <a>Order status</a>
                    <a>Order History</a>
                    <a>Track My Order</a>
                </div>
                <div className="col-md-3 d-flex flex-column">
                    <p>Information</p>
                    <a>About</a>
                    <a>Site Map</a>
                    <a>Coupons</a>
                    <p>Find us on</p>
                    <div className="d-flex flex-row">
                        <Icon icon={facebookWithCircle} style={{ color: '#fcfdfd', fontSize: '35px' }} />
                        <Icon icon={twitterCircleFilled} style={{ color: '#fcfdfd', fontSize: '35px' }} />
                        <Icon icon={linkedinWithCircle} style={{ color: '#fcfdfd', fontSize: '35px' }} />
                    </div>
                </div>
            </div>
            <hr className="footer-divider" />

            <div className="footerComponent ">
                <div class="justify-content-start copyright">
                    Copyright Ⓒ buy&SellPortal All rights reserved
                </div>
                <div class="justify-content-end">
                    <img src={require('../assets/images/visa.png')} className="payment-cards" />
                    <img src={require('../assets/images/mastercard.png')} className="payment-cards" />
                    <img src={require('../assets/images/paypal.png')} className="payment-cards" />
                </div>
            </div>

        </div>
    </div>
);

export default Footer;