import React from 'react';
import '../css/footer.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Icon, InlineIcon } from '@iconify/react';
import facebookWithCircle from '@iconify/icons-entypo-social/facebook-with-circle';
import twitterCircleFilled from '@iconify/icons-ant-design/twitter-circle-filled';
import linkedinWithCircle from '@iconify/icons-entypo-social/linkedin-with-circle';
import { MdRoom, MdPhone, MdMail, MdSupervisorAccount } from 'react-icons/md';


const Footer = () => (
    <div className="footerComponent">
        <div className="container">
            <div className="row footer-content">
                <div className="col-xs-6 col-md-3 d-flex flex-column footer-links">
                    <p>Customer Service</p>
                    <a>Shipping Rates</a>
                    <a>Return Policy</a>
                    <a>FAQs</a>
                    <a>Contact info</a>
                </div>
                <div className="col-xs-6 col-md-3 d-flex flex-column footer-links">
                    <p>Shopping</p>
                    <a>Women's</a>
                    <a>Men's</a>
                    <a>Kids</a>
                    <a>Brands</a>
                </div>
                <div className="col-xs-6 col-md-3 d-flex flex-column footer-links">
                    <p>My Account</p>
                    <a>Login/Register</a>
                    <a>Order status</a>
                    <a>Order History</a>
                    <a>Track My Order</a>
                </div>
                <div className="col-xs-6 col-md-3 d-flex flex-column">
                    {/* <p>Our Office</p>
                    <a>About</a>
                    <a>Site Map</a>
                    <a>Coupons</a>
                    <p>Find us on</p>
                    <div className="d-flex flex-row">
                        <Icon icon={facebookWithCircle} style={{ color: '#fcfdfd', fontSize: '35px' }} />
                        <Icon icon={twitterCircleFilled} style={{ color: '#fcfdfd', fontSize: '35px' }} />
                        <Icon icon={linkedinWithCircle} style={{ color: '#fcfdfd', fontSize: '35px' }} />
                    </div> */}
                    <p>Our Office</p>
                    <div className="d-flex flex-row iconWrapper">
                        <MdRoom className="icons" />
                        <p>1011 US Hwy 72 East, Athens AL 35611</p>
                    </div>
                    <div className="d-flex flex-row iconWrapper">
                        <MdMail className="icons" /><p> buy_sell@gmail.com</p>
                    </div>
                    <div className="d-flex flex-row iconWrapper">
                        <MdPhone className="icons" /><p>+1 609-666-4476</p>
                    </div>
                    <div className="d-flex flex-row social-icons">
                        <Icon icon={facebookWithCircle} style={{ color: '#fcfdfd', fontSize: '35px', marginRight: '0.5em' }} />
                        <Icon icon={twitterCircleFilled} style={{ color: '#fcfdfd', fontSize: '35px', marginRight: '0.5em' }} />
                        <Icon icon={linkedinWithCircle} style={{ color: '#fcfdfd', fontSize: '35px', marginRight: '0.5em' }} />
                    </div>
                </div>
            </div>

            <div className="horizontalLine"></div>

            <div className="row copyright">
                <div class="col-xs-12 col-md-6 bottomleft d-flex order-xs-1 justify-content-sm-center justify-content-md-start">
                    <p>Copyright Ⓒ buy&SellPortal. All rights reserved</p>
                </div>

                <div class="col-xs-12 col-md-6 bottomright d-flex order-xs-0 justify-content-sm-center justify-content-md-end">
                    <img src={require('../assets/images/visa.png')} className="payment-cards" />
                    <img src={require('../assets/images/mastercard.png')} className="payment-cards" />
                    <img src={require('../assets/images/paypal.png')} className="payment-cards" />
                </div>
            </div>

            {/* <hr className="footer-divider" />

            <div className="row footerComponent">
                <div class="col-md-6 justify-content-start copyright">
                    Copyright Ⓒ buy&SellPortal. All rights reserved
                </div>
                <div class="col-md-6 justify-content-end">
                    <img src={require('../assets/images/visa.png')} className="payment-cards" />
                    <img src={require('../assets/images/mastercard.png')} className="payment-cards" />
                    <img src={require('../assets/images/paypal.png')} className="payment-cards" />
                </div>
            </div> */}

        </div>
    </div>
);

export default Footer;