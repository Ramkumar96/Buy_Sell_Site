import React from 'react';
import '../../css/home.css';
import Carousel from 'react-bootstrap/Carousel';

import { Icon, InlineIcon } from '@iconify/react';
import heartOutlined from '@iconify/icons-ant-design/heart-outlined';
import starFilled from '@iconify/icons-ant-design/star-filled';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CustomCard from './CustomCard';

const Home = () => (
  <>

    <div className="container-fluid">
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
    </div>






    {/* Products card container */}
    {/* <div className="container">
      <div className="row products-component">   
          <CustomCard />
          <CustomCard />
          <CustomCard />
      </div> */}
{/* 
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
    </div> */}

    

    {/* subscribe form component */}
    <div className="container-fluid subscribe-component">
      <p className="text-center subscribe-title">Enjoy our Exclusive Deals and Offers</p>
      <form className="form-inline">
        <input type="email" id="email" placeholder="Enter your email address" name="email" />
        <button className="button">SUBSCRIBE</button>
      </form>
    </div>
  </>

)


export default Home;
