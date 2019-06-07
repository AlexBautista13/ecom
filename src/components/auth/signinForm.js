import { reduxForm, Field } from 'redux-form';

import { FormInput } from '../formFields';

class SignInForm extends Component {
    render() {
        const { className } = this.props;
        return (
            <form className={`${className} sign-in-form`}>
                sign innn
                <Field className='sign-in-form__email'
                type='email'
                title='Email'
                placeholder='Email'
                name='email'
                component={FormInput}/>
                <Field className='sign-in-form__password'
                type='password'
                title='Password'
                placeholder='Password'
                name='password'
                component={FormInput}/>
            </form>
        )
    }
}

SignInForm = reduxForm({
    from: 'SignInform'
})(SignInForm);

export default SignInForm;