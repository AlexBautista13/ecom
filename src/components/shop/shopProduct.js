import React, { Component } from 'react';
import Quantity from '../quantity';
import GreenPriceTag from '../greenPriceTag';

import * as actions from '../../actions';
import { connect } from 'react-redux';

class ShopProduct extends Component {

    handleAddToCart = () => {
        if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
            document.getElementById('shop-cart').classList.remove('cart-hidden');
            const { _id, title, description, price, belongsTo, imageUrl } = this.props;
            this.props.addCartProduct({ _id, title, description, price, belongsTo, imageUrl });
        } else {
            document.getElementById('shop-cart').classList.add('cart-hidden');
        }
    }

    render() {
        const { _id, title, description, price } = this.props;
        return (
            <div className='shop-product'>
                <div className='shop-product__front'>
                    <img className='shop-product__front__image' src='http://via.placeholder.com/220x220'/>
                    <div className='shop-product__front__title'>{title}</div>
                </div>
                <div className='shop-product__back'>
                    <div className='shop-product__back__title'>
                        {title}
                    </div>
                    <div className='shop-product__back__description'>
                        {description}
                    </div>
                    <GreenPriceTag className='shop-product__back__price' title={price}/>
                    <Quantity className='shop-product__back__quantity' quantity={1}/>
                    <a onClick={this.handleAddToCart} className='shop-product__back__add-to-cart'>
                        Add to Cart
                    </a>
                </div>
            </div>
        )
    }
}

ShopProduct = connect(null, actions)(ShopProduct);

export default ShopProduct;