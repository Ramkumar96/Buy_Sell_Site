import React, { Component } from 'react'
import '../../css/brands.css'

export default class Brands extends Component {
    render() {
        return (
            <div>
                <div className="brand">
                    <img className="brand-img" src={require('../../assets/images/brands.png')} alt="Card image cap" />
                </div>
            </div>
        )
    }
}
