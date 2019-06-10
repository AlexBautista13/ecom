import React, { Component } from 'react';

function CartButton({className, icon}) {
    return (
        <div className={`${className} cart-button`}>
            <i className={icon}/>        
        </div>
    )
}

function CartContent({className}) {
    return (
        <div className={`${className} cart-content`}>

        </div>
    )
}

class ShopCart extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} shop-cart`}>
                <CartButton className='shop-cart__toggle' icon='fas fa-times'/>
                <CartContent className='shop-cart__content'/>
            </div>
        )
    }
}
export default ShopCart;