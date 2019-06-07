import React, { Component } from 'react';

import SignUpForm from './signupForm';
import PageTitle from '../pageTitle';

class SignUp extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='sign-up'>
                <PageTitle className='sign-up__page-title' title='Register' />
                <SignUpForm onSubmit={this.onSubmit} className='sign-up__form' />
            </div>
        )
    }
}
export default SignUp;