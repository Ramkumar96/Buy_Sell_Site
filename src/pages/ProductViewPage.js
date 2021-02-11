import React from 'react';
import '../css/ProductViewPage.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CustomCard from '../components/CustomCard';

import { Icon, InlineIcon } from '@iconify/react';
import heartOutlined from '@iconify/icons-ant-design/heart-outlined';
import starFilled from '@iconify/icons-ant-design/star-filled';
import { useHistory } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';

const ProductViewPage = () => {
    const history = useHistory();
    return (
        <div className="container">
            <div className="row ">
                <div className="col">
                    <div className="row row-1">
                        <ul class="breadcrumb">
                            <li><a href="#">Back</a></li>
                            <li><a href="#">Clothing</a></li>
                            <li><a href="#">Dresses</a></li>
                            <li>Bobeau</li>
                        </ul>
                    </div>
                    <div className="row row-2">
                        <div className="col-75">
                            <Carousel className="img-carousel">
                                {/* <Carousel.Item>
                                    <img
                                        className="img-fill"
                                        src={require('../assets/images/c1.jpg')}
                                        alt="First slide"
                                    />
                                </Carousel.Item> */}
                                <Carousel.Item>
                                    <img
                                        className="img-fill"
                                        src={require('../assets/images/c2.jpg')}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>

                        <div className="col-25">
                            <div>
                                <p className="product-text"> Bobeau Short sleeve Wrap dress</p>
                            </div>
                            <div>
                            <p className="row-right">
                                    <Icon icon={starFilled} style={{ color: '#fdcc0d', fontSize: '22px' }} />
                                    <Icon icon={starFilled} style={{ color: '#fdcc0d', fontSize: '22px' }} />
                                    <Icon icon={starFilled} style={{ color: '#fdcc0d', fontSize: '22px' }} />
                                    <Icon icon={starFilled} style={{ color: '#fdcc0d', fontSize: '22px' }} />
                                    <Icon icon={starFilled} style={{ color: '#fdcc0d', fontSize: '22px' }} />
                                </p>
                            </div>
                            <div >
                                <p className="product-text red-text"> $14.99 - $19.99 </p> <p className="product-text"> & Free shipping</p>
                            </div>
                            <div>
                                <p className="product-text">SIZE</p>
                            </div>
                            <div>
                            <DropdownButton
                            as={InputGroup.Prepend}
                            // variant="outline-secondary"
                            title="Size "
                            id="input-group-dropdown-1"
                            className="drop"
                        >
                            <Dropdown.Item href="#">Lorem </Dropdown.Item>
                            <Dropdown.Item href="#">Lorem </Dropdown.Item>
                            <Dropdown.Item href="#">Lorem </Dropdown.Item>
                            <Dropdown.Item href="#">Lorem </Dropdown.Item>

                        </DropdownButton>

                            </div>

                            <div>
                            <button className="product-button" onClick={()=>history.push('/checkout')}>Buy Now</button>
                            </div>
                            <div>
                            <button className="product-button-outine ">Add to Cart</button>
                            </div>
                            <div>
                            <button className="product-button-outine ">Add to Collection</button>
                            </div>

                            <div>
                                <p className="product-text">SHARE</p>
                            </div>

                        </div>
                    </div>
                    <div className="row row-3">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            // variant="outline-secondary"
                            title="Product Describtion                             "
                            id="input-group-dropdown-1"
                            className="drop"
                        >
                            <Dropdown.Item href="#">Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br />
                              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in<br />
                               voluptate velit esse cillum dolore eu </Dropdown.Item>

                        </DropdownButton>
                    </div>
                    <div className="row newArrivals">
                    <div className="col">
                        <div className="row newArrivalsTitle ">
                            <p>New Arrivals</p>
                        </div>
                        <div className="row newArrivalsCard">
                            <div className="col-xs-6 col-md-3">
                                <CustomCard />
                            </div>
                            <div className="col-xs-6 col-md-3">
                                <CustomCard />
                            </div>
                            <div className="col-xs-6 col-md-3">
                                <CustomCard />
                            </div>
                            <div className="col-xs-6 col-md-3">
                                <CustomCard />
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}

export default ProductViewPage;