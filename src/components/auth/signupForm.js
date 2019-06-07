import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formFields';
import Details from '../details';
import history from '../../history';
class SignUpForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;

        const info = [
            {
                _id: 0,
                
                title: 'At least 6 characters'
            },
            {
                _id: 1,
                
                title: 'At least one number'
            },
            {
                _id: 2,
           
                title: 'At least one symbol'
            }
        ]
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
                <Field className='sign-up-form__name'
                type='name'
                title='Name'
                placeholder='Name'
                name='name'
                component={FormInput}/>
                <Field className='sign-up-form__email'
                type='email'
                title='Email'
                placeholder='Email'
                name='email'
                component={FormInput}/>
                <Field className='sign-up-form__password'
                type='password'
                title='Password'
                placeholder='Password'
                name='password'
                component={FormInput}/>
                
                <Field className='sign-up-form__confirm'
                type='password'
                title='Confirm Password'
                placeholder='Confirm Password'
                name='confirm'
                component={FormInput}/>

                <div className='sign-up-form__line'></div>
                <Field className='sign-up-form__login'
               
                onClick={() => history.push('/account')}
                type='submit'
              
                title='Creat Account'
                name='login'
                component={FormButton}/>
                <Field className='sign-up-form__back'
           
                onClick={() => history.push('/signin')}
                type='button'
                title='Back'
                name='back'
                short={true}
                component={FormButton}/>
               
                <Details className='sign-up-form__details' title='Password Requirements' info={info}/>
            </form>
        )
    }
}
SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);
export default SignUpForm;