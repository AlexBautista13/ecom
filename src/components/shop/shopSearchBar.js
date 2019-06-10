import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
function FormSearchBar(props) {
    return (
        <input className={`${props.className} form-search-bar`} {...props.input} type='text' placeholder={`${props.placeholder}`} />
    )
}
{/* <i class="fas fa-search"></i> */}
class ShopSearchBar extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
                <Field name='query' className='shop-search-bar__form-search-bar' placeholder='search' component={FormSearchBar} />
            </form>
        )
    }    
}
ShopSearchBar = reduxForm({
    form: 'ShopSearchBar'
})(ShopSearchBar);
export default ShopSearchBar;