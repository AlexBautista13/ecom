import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formFields';

import history from '../../history';

import OrderSummary from './orderSummary';

class ShippingForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
  
        return (
            <form onSubmit={handleSubmit} className={`${className} shipping-form`}>
                <Field className='shipping-form__name'
                type='name'
                title='Name'
                placeholder='Name'
                name='name'
                component={FormInput}/>
                <Field className='shipping-form__address'
                type='address'
                title='Street Address'
                placeholder='Street Address'
                name='address'
                component={FormInput}/>
                <Field className='shipping-form__city'
                type='city'
                title='City'
                placeholder='City'
                name='city'
                component={FormInput}/>
                <Field className='shipping-form__state'
                type='state'
                title='State'
                placeholder='State'
                name='state'
                component={FormInput}/>
                <Field className='shipping-form__zipcode'
                type='zipcode'
                title='Zipcode'
                placeholder='Zipcode'
                name='zipcode'
                component={FormInput}/>
 
        
                <div className='shipping-form__line'></div>
                <Field className='shipping-form__use-this-address'
                onClick={() => history.push('/information/payment')}
                type='submit'
                title='Use This Address'
                name='use-this-address'
                component={FormButton}/>
                <Field className='shipping-form__back'
                onClick={() => history.push('/signin')}
                type='button'
                title='Back'
                name='back'
                short={true}
                component={FormButton}/>

                <OrderSummary className='shipping-form__summary'/>
            </form>
        )
    }
}
ShippingForm = reduxForm({
    form: 'ShippingForm'
})(ShippingForm);
export default ShippingForm;