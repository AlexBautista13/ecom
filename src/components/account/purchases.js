import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Purchases extends Component {

    componentDidMount() {
        this.props.fetchUserPurchases();
    }

    render() {
        const { className } = this.props;

        return (
            <div className={`${className} purchases`}>
                {
                    this.props.purchases.map(purchase => {
                        return (
                            <a onClick={() => this.props.setPurchaseDetail(purchase._id)} key={purchase._id} className='purchases__purchase purchase'>
                                <img className='purchase__img' src='http://via.placeholder.com/80x80'/>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { purchases } = state.user;
    return { purchases };
}

Purchases = connect(mapStateToProps, actions)(Purchases);

export default Purchases;