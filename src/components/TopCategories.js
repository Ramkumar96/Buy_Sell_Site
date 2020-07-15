import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';

import CategoriesCard from './CategoriesCard';
import '../../css/TopCategories.css';
import CustomCard from '../Components/CustomCard';
import Brands from './Brands';


class TopCategories extends Component {
    render() {
        return (
            <div className="container-fluid">

                <div className="row filterCategories">
                    <div className="col">
                        <div className="row">
                            <p>Women's</p>
                        </div>
                        <div className="row">
                            <div>
                                <p>Home/Women's</p>
                            </div>
                            <div>
                                <span>
                                <DropdownButton
                                    as={InputGroup.Prepend}
                                    // variant="outline-secondary"
                                    title="Shoes"
                                    id="input-group-dropdown-1"
                                    className="drop"
                                >
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                </DropdownButton>
                                </span>
                                
                            </div>

                        </div>
                    </div>

                </div>

                <div className="row topcategories">
                    <div className="col">
                        <div className="row topcategoriesTitle">
                            <p>Top Categories For you</p>
                        </div>
                        <div className="row topcategoriesCards">
                            <CategoriesCard />
                            <CategoriesCard />
                            <CategoriesCard />
                            <CategoriesCard />
                            <CategoriesCard />
                        </div>
                    </div>
                </div>

                <div className="row newArrivals">
                    <div className="col">
                        <div className="row newArrivalsTitle ">
                            <p>New Arrivals</p>
                        </div>
                        <div className="row newArrivalsCard">
                            <CustomCard />
                            <CustomCard />
                            <CustomCard />
                            <CustomCard />
                        </div>
                    </div>
                </div>
                {/* Brands Container */}
                <div className="row brands">
                    <div className="col">
                        <div className="row brandsTitle">
                            <p>Brands For You</p>
                        </div>
                        <div className="row brandscard">
                            <Brands />
                            <Brands />
                            <Brands />
                            <Brands />
                            <Brands />
                        </div>
                    </div>
                </div>

                {/* Best Sellers Containers */}

                <div className="row newArrivals">
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
        )
    }
}

export default TopCategories;
