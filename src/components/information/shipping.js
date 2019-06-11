import React, { Component } from 'react';
import PageTitle from '../pageTitle';
// REDUX 
import { connect } from 'react-redux';
import * as actions from '../../actions';

import ShippingForm from './shippingForm';

class Shipping extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }
    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='shipping-form'>
                <PageTitle className='shipping-form__page-title' title='Shipping Address' />
                <ShippingForm onSubmit={this.onSubmit} className='shipping-form__form' />
            </div>
        )
    }
}
Shipping = connect(null, actions)(Shipping);
export default Shipping;