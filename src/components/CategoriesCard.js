import React, { Component } from 'react'
import '../../css/CategoriesCard.css';

class CategoriesCard extends Component {
    render() {
        return (
                <div className="card">
                    <img className="card-img-top" src={require('../../assets/images/shoes.png')} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="cardtopic">Card title</h5>
                    </div>
                </div>
        )
    }
}

export default CategoriesCard;