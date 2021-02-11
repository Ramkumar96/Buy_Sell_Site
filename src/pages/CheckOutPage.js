import React, { Component } from 'react';
import '../css/CheckOutPage.css';
import OrderSummary from '../components/OrderSummary';
import '../css/OrderSummary.css';

import 'antd/dist/antd.css';
import { Steps, Button, message } from 'antd';
import { SolutionOutlined, ShoppingCartOutlined, CreditCardOutlined } from '@ant-design/icons';



const { Step } = Steps;

const steps = [
    {
        icon: <ShoppingCartOutlined className="icon" />,
        title: 'Cart',
        content: (<div>
            <div className="content">
                <div class="container-orderSummary">
                    {/* className="table" */}
                    <table >
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th >Quantity</th>
                            <th >Price</th>
                            <th >Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                    <td>
                        <figure className="media">
                            <div className="img-wrap"><img src="http://bootstrap-ecommerce.com/main/images/items/1.jpg" className="img-thumbnail img-sm" /></div>
                            <figcaption className="media-body">
                                <h6 className="title text-truncate">Product name goes here </h6>
                                <dl className="param param-inline small">
                                    <dt>Size: </dt>
                                    <dd>XXL</dd>
                                </dl>
                                <dl className="param param-inline small">
                                    <dt>Color: </dt>
                                    <dd>Orange color</dd>
                                </dl>
                            </figcaption>
                        </figure>
                    </td>
                    <td>
                        <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </td>

                    <td>
                        <var className="price">USD 35</var>
                        <small className="text-muted">(USD10 each)</small>
                    </td>
                    <td>
                        <a title href className="btn btn-outline-success" data-toggle="tooltip" data-original-title="Save to Wishlist"> <i className="fa fa-heart" /></a>
                        <a href className="btn btn-outline-danger btn-round"><i className="fa fa-trash" /></a>
                    </td>
                    </tr>

                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>),
    },
    {
        icon: <SolutionOutlined className="icon" />,
        title: 'Delivery & Billing Address',
        content: (
            <div className="content">
                <div className="container-address">
                    <div className="col">
                        <div className="form-group">
                            <label for="email">Email ID:</label>
                            <input type="email" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <hr />
                        <p>Add Shipping Address</p>
                        <div className="form-group">
                            <label for="email">Name:</label>
                            <input type="email" id="email" placeholder="Eg: Akshay kumar" name="email" />
                        </div>
                        <div className="form-group">
                            <label for="email">Mobile Number:</label>
                            <input type="email" id="email" placeholder="+94771234567" name="email" />
                        </div>
                        <div className="form-group">
                            <label for="email">Email ID:</label>
                            <input type="email" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="form-group">
                            <label for="email">Zip code:</label>
                            <input type="email" id="email" placeholder="40000" name="email" />
                        </div>
                        <div className="form-group">
                            <label for="email">Address:</label>
                            <input type="email" id="email" placeholder="House number, Road, Landmark" name="email" />
                        </div>
                        <div className="form-group">
                            <label for="email"></label>
                            <input style={{ width: '25%', marginRight: '20px' }} type="email" id="email" placeholder="City" name="email" />
                            <input style={{ width: '30%' }} type="email" id="email" placeholder="Select state" name="email" />
                        </div>
                        <div className="form-group">
                            <button className="save-button">SAVE & CONTINUE</button>
                        </div>

                    </div>
                </div>
            </div>),
    },
    {
        icon: <CreditCardOutlined className="icon" />,
        title: 'Payment',
        content: (
            <div className="content">
                <div className="container-address">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="panel">
                                    <div className="row">
                                        <div className="col-8">
                                            <h3 className="panel-title">
                                                Payment Details
                                            </h3>
                                        </div>
                                        <div className=" col-4">
                                            <label className="panel-header">
                                                <input type="checkbox" />
                                                <p>Remember</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <form role="form">

                                            <div className="form-group">
                                                <label htmlFor="nameoncard">
                                                    NAME ON CARD</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="cardNumber" placeholder="Name on Card" required autofocus />
                                                    <span className="input-group-addon"><span className="glyphicon glyphicon-lock" /></span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="cardNumber">
                                                    CARD NUMBER</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="cardNumber" placeholder="Valid Card Number" required autofocus />
                                                    <span className="input-group-addon"><span className="glyphicon glyphicon-lock" /></span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-7">
                                                    <div className="form-group">
                                                        <label htmlFor="expityMonth">
                                                            EXPIRY DATE
                                            </label>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <input type="text" className="form-control" id="expityMonth" placeholder="MM" required />
                                                            </div>
                                                            <div className="col-6">
                                                                <input type="text" className="form-control" id="expityYear" placeholder="YY" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4 pull-right">
                                                    <div className="form-group">
                                                        <label htmlFor="cvCode">
                                                            CV CODE</label>
                                                        <input type="password" className="form-control" id="cvCode" placeholder="CV" required />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <a href="http://www.jquery2dotnet.com" className="btn btn-success btn-lg btn-block" role="button">Pay</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>),
    },
];


export default class CheckOutPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    componentWillMount() {
        this.props.hideNavigation()
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    // onClickCollapse = () => {
    //     var coll = document.getElementsByClassName("collapsible");
    //     var i;

    //     for (i = 0; i < coll.length; i++) {
    //         coll[i].addEventListener("click", function () {
    //             this.classList.toggle("active");
    //             var content = this.nextElementSibling;
    //             if (content.style.maxHeight) {
    //                 content.style.maxHeight = null;
    //             } else {
    //                 content.style.maxHeight = content.scrollHeight + "px";
    //             }
    //         });
    //     }
    // }


    render() {

        const { current } = this.state;

        return (


            <div>
                <div className="checkoutPageStepsContainer">
                    <div className="container-fluid checkout-steps text-center">
                        <Steps current={current} className=" col-12 ">
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} icon={item.icon} />
                            ))}
                        </Steps>
                    </div>
                </div>

                <div className="checkoutPageContainer">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="steps-content">{steps[current].content}</div>
                            <div className="steps-action">
                                {current < steps.length - 1 && (
                                    <Button type="primary" onClick={() => this.next()}>
                                        Next
                                    </Button>
                                )}
                                {current === steps.length - 1 && (
                                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                        Done
                                    </Button>
                                )}
                                {current > 0 && (
                                    <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                                        Previous
                                    </Button>
                                )}
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="container-total">
                                <p>MRP <span className="price">Rs. 12,467</span></p>
                                <p>Retail Discount <span className="price" style={{ color: 'green' }}>(-) Rs.1,883</span></p>
                                <p>Offer Price <span className="price">Rs. 10,584</span></p>
                                <p>Delivery Fees(Free) <span className="price" style={{ color: 'red' }}>Rs.0</span></p>
                                <hr />
                                <p>You Pay <span className="price"  ><b>Rs. 10,615</b></span></p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>










            /* <button className="collapsible" onClick={this.onClickCollapse}>ORDER SUMMARY</button>
                                <div className="content">
                                    <div class="container-orderSummary">
                                        <div class="card">
                                            <table className="table">
                                                <thead className="text-muted">
                                                    <tr>
                                                        <th scope="col">Product</th>
                                                        <th scope="col" width={120}>Quantity</th>
                                                        <th scope="col" width={120}>Price</th>
                                                        <th scope="col" width={200} className="text-right">Action</th>
                                                    </tr>
                                                </thead>
                                                <OrderSummary />
    
                                                <OrderSummary />
    
                                                <OrderSummary />
    
                                            </table>
    
                                        </div>
                                    </div>
                                </div>
                               
            /* <button className="collapsible" onClick={this.onClickCollapse}>SHIPPING AND BILLING DETAILS</button>
                                <div className="content">
                                    <div className="container-address">
                                        <div className="col">
                                            <div className="form-group">
                                                <label for="email">Email ID:</label>
                                                <input type="email" id="email" placeholder="Enter email" name="email" />
                                            </div>
                                            <hr />
                                            <p>Add Shipping Address</p>
                                            <div className="form-group">
                                                <label for="email">Name:</label>
                                                <input type="email" id="email" placeholder="Eg: Akshay kumar" name="email" />
                                            </div>
                                            <div className="form-group">
                                                <label for="email">Mobile Number:</label>
                                                <input type="email" id="email" placeholder="+94771234567" name="email" />
                                            </div>
                                            <div className="form-group">
                                                <label for="email">Email ID:</label>
                                                <input type="email" id="email" placeholder="Enter email" name="email" />
                                            </div>
                                            <div className="form-group">
                                                <label for="email">Zip code:</label>
                                                <input type="email" id="email" placeholder="40000" name="email" />
                                            </div>
                                            <div className="form-group">
                                                <label for="email">Address:</label>
                                                <input type="email" id="email" placeholder="House number, Road, Landmark" name="email" />
                                            </div>
                                            <div className="form-group">
                                                <label for="email"></label>
                                                <input style={{ width: '25%', marginRight: '20px' }} type="email" id="email" placeholder="City" name="email" />
                                                <input style={{ width: '30%' }} type="email" id="email" placeholder="Select state" name="email" />
                                            </div>
                                            <div className="form-group">
                                                <button className="save-button">SAVE & CONTINUE</button>
                                            </div>
    
                                        </div>
                                    </div>
                                </div> */


            /* <button className="collapsible" onClick={this.onClickCollapse}>PAYMENT</button>
                                <div className="content">
                                    <div className="container-address">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="panel">
                                                        <div className="row">
                                                            <div className="col-8">
                                                                <h3 className="panel-title">
                                                                    Payment Details
                                                        </h3>
                                                            </div>
                                                            <div className=" col-4">
                                                                <label className="panel-header">
                                                                    <input type="checkbox" />
                                                                    <p>Remember</p>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="panel-body">
                                                            <form role="form">
    
                                                                <div className="form-group">
                                                                    <label htmlFor="nameoncard">
                                                                        NAME ON CARD</label>
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control" id="cardNumber" placeholder="Name on Card" required autofocus />
                                                                        <span className="input-group-addon"><span className="glyphicon glyphicon-lock" /></span>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="cardNumber">
                                                                        CARD NUMBER</label>
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control" id="cardNumber" placeholder="Valid Card Number" required autofocus />
                                                                        <span className="input-group-addon"><span className="glyphicon glyphicon-lock" /></span>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-7">
                                                                        <div className="form-group">
                                                                            <label htmlFor="expityMonth">
                                                                                EXPIRY DATE
                                                                        </label>
                                                                            <div className="row">
                                                                                <div className="col-6">
                                                                                    <input type="text" className="form-control" id="expityMonth" placeholder="MM" required />
                                                                                </div>
                                                                                <div className="col-6">
                                                                                    <input type="text" className="form-control" id="expityYear" placeholder="YY" required />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-4 pull-right">
                                                                        <div className="form-group">
                                                                            <label htmlFor="cvCode">
                                                                                CV CODE</label>
                                                                            <input type="password" className="form-control" id="cvCode" placeholder="CV" required />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
    
                                                        <a href="http://www.jquery2dotnet.com" className="btn btn-success btn-lg btn-block" role="button">Pay</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>
                                </div>  */




        )
    }
}
