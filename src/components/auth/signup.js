import React, { Component } from 'react';
import SignUpForm from './signupForm';
import PageTitle from '../pageTitle';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignUp extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

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

SignUp = connect(null, actions)(SignUp);

export default SignUp; 