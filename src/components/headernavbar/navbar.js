import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Navbar extends Component {

    handleOnClick = (link) => {
        this.props.changeNavbarActive(link._id)
        if(this.props.onClick) {
            this.props.onClick(link._id);
        }
    }

    render() {
        return (
            <div className='navbar'>
                {
                    this.props.navbarLinks.map((link, index) => {
                        return (
                            
                            <a className={`navbar__link ${link.active ? 'green-text' : ''}`} key={index} onClick={() => this.handleOnClick(link)}>
                                {link.title}
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {

    const{ navbarLinks, onClick } = state.headerNavbar;
    return {

        navbarLinks,
        onClick
    }
}

Navbar = connect(mapStateToProps, actions)(Navbar);
export default Navbar;