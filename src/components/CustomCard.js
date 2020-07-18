import React, { Component } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import heartOutlined from '@iconify/icons-ant-design/heart-outlined';
import starFilled from '@iconify/icons-ant-design/star-filled';
import Card from 'react-bootstrap/Card';
import '../css/CustomCard.css';

class CustomCard extends Component {
    render() {
        return (
            <div>
                {/* <div className="body"> */}
                    <div className="product">
                        <div className="imgbox">
                            <img src={require('../assets/images/cardImage.png')} />
                        </div>
                        <div className="details">
                            <h2>T Shirt <br /> <span> Men's Designer T-shirt</span> </h2>
                            <div className="price"> $55.99</div>
                            {/* <label>Rating</label> */}
                            <p className="ratings">
                                <Icon icon={starFilled} style={{ color: '#fdcc0d', fontSize: '22px' }} className="rating-star" />
                                <Icon icon={starFilled} style={{ color: '#fdcc0d', fontSize: '22px' }} />
                                <Icon icon={starFilled} style={{ color: '#fdcc0d', fontSize: '22px' }} />
                                <Icon icon={starFilled} style={{ color: '#fdcc0d', fontSize: '22px' }} />
                                <Icon icon={starFilled} style={{ color: '#fdcc0d', fontSize: '22px' }} />
                            </p>
                            {/* <label>Details</label>
                            <Icon icon={heartOutlined} style={{ color: '#eb5757', fontSize: '25px' }} />
                            <ul className="colors">
                                <li>sdc</li>
                                <li>sdfdf</li>
                                <li>sdfsf</li>
                                <li></li>
                                <li></li>
                            </ul> */}
                            <a className="add-to-cart" href="#">Add to cart</a>
                        </div>
                    </div>
                {/* </div> */}






                {/* <Card className='card' >
                    <Card.Img variant="top" src={require('../assets/images/dress-03.jpg')}  style={{ height:'200px'}} />
                    <Card.Body style={{height:'100px'}} >
                        <Card.Text>
                            <div className="d-flex flex-row">
                                <p className="justify-content-start">Gown</p>
                                <p className="justify-content-end"><Icon icon={heartOutlined} style={{ color: '#eb5757', fontSize: '22px' }} /></p>
                            </div>
                            <div className="star">
                                <p className="row-left">$9.99</p>
                                <p className="row-right">
                                    <Icon icon={starFilled} style={{ color: '#fdcc0d', fontSize: '22px' }} />
                                    <Icon icon={starFilled} style={{ color: '#fdcc0d', fontSize: '22px' }} />
                                    <Icon icon={starFilled} style={{ color: '#fdcc0d', fontSize: '22px' }} />
                                    <Icon icon={starFilled} style={{ color: '#fdcc0d', fontSize: '22px' }} />
                                    <Icon icon={starFilled} style={{ color: '#fdcc0d', fontSize: '22px' }} />
                                </p>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card> */}
            </div>
        )
    }
}

export default CustomCard;
