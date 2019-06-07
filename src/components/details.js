import React, { Component } from 'react';

class Details extends Component {
    render() {
        const { className, title, links } = this.props;
        return (
            <div className={`${className} details`}>
                <div className='details__title'>{title}</div>
                <div className='details__links'>
                    {
                        links.map(link => {
                            return <a key={link._id} onClick={link.onClick} className='details__link'>{link.title}</a>
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Details;