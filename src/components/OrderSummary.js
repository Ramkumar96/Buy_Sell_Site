import React, { Component } from 'react'
import '../css/OrderSummary.css';

export default class OrderSummary extends Component {
    render() {
        return (

            // <div className="ordersummary-row">
            <div>
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
            </div>

        )
    }
}
