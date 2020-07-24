import React, { Component } from 'react';
import SellingHeader from '../components/sellHeader';
import SellSidebar from '../components/sellSidebar';

export default class AddProductPage extends Component {
    render() {
        return (
            <>
                <SellingHeader />
                <SellSidebar />
            </>
        )
    }

}