import React, { Component } from 'react';
import '../css/CheckOutPage.css';
import OrderSummary from '../components/OrderSummary';
import '../css/OrderSummary.css';

export default class CheckOutPage extends Component {

    onClickCollapse = () => {
        var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }
    }


    render() {
        return (
            <div className="checkoutPageContainer">
                <div className="row">
                    <div className="col-8">
                        {/* Order summary */}
                        <button className="collapsible" onClick={this.onClickCollapse}>ORDER SUMMARY</button>
                        <div className="content">
                            <div class="container-orderSummary">
                                <div class="card">
                                    <table className="table table-hover shopping-cart-wrap">
                                        <thead className="text-muted">
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col" width={120}>Quantity</th>
                                                <th scope="col" width={120}>Price</th>
                                                <th scope="col" width={200} className="text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <OrderSummary />
                                            <OrderSummary />

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        {/* Shipping details */}
                        <button className="collapsible" onClick={this.onClickCollapse}>SHIPPING AND BILLING DETAILS</button>
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
                        </div>

                    </div>

                    <div className="col-4 ram4 ">
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
        )
    }
}
