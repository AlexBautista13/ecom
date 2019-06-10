import React, { Component } from 'react';
import Quantity from '../quantity';
import GreenPriceTag from '../greenPriceTag';
class ShopProduct extends Component {
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
                    <div className='shop-product__back__add-to-cart'>
                        Add to Cart
                    </div>
                </div>
            </div>
        )
    }
}
export default ShopProduct;