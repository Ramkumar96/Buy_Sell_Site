import React from 'react';
import '../css/ProductViewPage.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CustomCard from '../components/HomeComponents/CustomCard';

import Carousel from 'react-bootstrap/Carousel';

const ProductViewPage = () => {
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
                                <Carousel.Item>
                                    <img
                                        className="img-fill"
                                        src={require('../assets/images/c1.jpg')}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="img-fill"
                                        src={require('../assets/images/c2.jpg')}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="img-fill"
                                        src={require('../assets/images/c2.jpg')}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-25">
                            <p>raam</p>
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
                    <div className="row row-4">
                        <div className="col">
                            <div className="row newArrivalsTitle ">
                                <p>Best Sellers</p>
                            </div>
                            <div className="row newArrivalsCard">
                                <CustomCard />
                                <CustomCard />
                                <CustomCard />
                                <CustomCard />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductViewPage;