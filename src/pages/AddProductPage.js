import React, { Component } from 'react';
import SellingHeader from '../components/sellHeader';
import SellSidebar from '../components/sellSidebar';

export default class AddProductPage extends Component {
    render() {
        return (
            <>
                <SellingHeader />
                <SellSidebar />
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
            </>
        )
    }

}