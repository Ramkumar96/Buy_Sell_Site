import React, { Component } from 'react';
import '../css/home.css';
import Carousel from 'react-bootstrap/Carousel';

import { Icon, InlineIcon } from '@iconify/react';
import heartOutlined from '@iconify/icons-ant-design/heart-outlined';
import starFilled from '@iconify/icons-ant-design/star-filled';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CustomCard from './CustomCard';


import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import '../css/_slick.css';
import '../css/_slickTheme.css'

import Slider from "react-slick";

class Home extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


    return (
      <>
        <div className="homeSlider">
          <Slider {...settings}>
            <div className="sliderImage">
              {/* <img src={require('../assets/images/c1.jpg')} /> */}
            </div>
            <div className="sliderImage">
              {/* <img src={require('../assets/images/c2.jpg')} /> */}
            </div>
            <div className="sliderImage">
              {/* <img src={require('../assets/images/c3.jpg')} /> */}
            </div>
          </Slider>
        </div>


        {/* product section */}
        <div className="container">

          <div className="row row-1">
            <div className="d-flex flex-row">
              <div className="justify-content-start">
                <h2>Newest products</h2>
              </div>
              <div className="justify-content-end">
                <p>Sort by</p>
                <form>
                  <InputGroup className="mb-3 justify-content-end input-box">
                    <DropdownButton
                      as={InputGroup.Prepend}
                      // variant="outline-secondary"
                      title="Newest"
                      id="input-group-dropdown-1"
                      className="drop"
                    >
                      <Dropdown.Item href="#">Featured</Dropdown.Item>
                      <Dropdown.Item href="#">On sale</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </form>
              </div>
            </div>
          </div>

          {/* Card Row 01 */}
          <div className="row row-2">
            <div className="col-md-3">
              <CustomCard />
            </div>
            <div className="col-md-3">
              <CustomCard />
            </div>
            <div className="col-md-3">
              <CustomCard />
            </div>
            <div className="col-md-3">
              <CustomCard />
            </div>
          </div>
          {/* Card Row 02 */}
          <div className="row row-2">
            <div className="col-md-3">
              <CustomCard />
            </div>
            <div className="col-md-3">
              <CustomCard />
            </div>
            <div className="col-md-3">
              <CustomCard />
            </div>
            <div className="col-md-3">
              <CustomCard />
            </div>
          </div>
        </div>

        {/* subscribe form component */}
        <div className="container-fluid subscribe-component">
          <p className="text-center subscribe-title">Enjoy our Exclusive Deals and Offers</p>
          <form className="form-inline">
            <input type="email" id="email" placeholder="Enter your email address" name="email" />
            <button className="button">SUBSCRIBE</button>
          </form>
        </div>
      </>
    );
  }
}

/* <div className="container-fluid">
      <Carousel className="img-carousel">
        <Carousel.Item>
          <img
            className="img-fill"
            src={require('../../assets/images/c1.jpg')}
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
            src={require('../../assets/images/c2.jpg')}
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
            src={require('../../assets/images/c3.jpg')}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div> */






/* Products card container */
/* <div className="container">
      <div className="row products-component">   
          <CustomCard />
          <CustomCard />
          <CustomCard />
      </div> */
/* 
      <div className="row products-component">
        <div className="col-md-4">
          <CustomCard />
        </div>
        <div className="col-md-4">
          <CustomCard />
        </div>
        <div className="col-md-4 ">
          <CustomCard />
        </div>
      </div>
    </div> */



export default Home;
