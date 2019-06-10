import {
    SET_HEADER_LINKS,
    SET_NAVBAR_LINKS,
    CHANGE_NAVBAR_ACTIVE
} from '../actions/types';

const INITIAL_STATE = {
    headerLinks: [],
    navbarLinks: [],
    onClick: ''
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_HEADER_LINKS:
            return {
                ...state,
                headerLinks: action.payload
            }
        case SET_NAVBAR_LINKS:
        const { links, onClick } = action.payload; 
            return {
                ...state,
                navbarLinks: links,
                onClick: onClick
            }
        case CHANGE_NAVBAR_ACTIVE: 
            const navbarLinks = state.navbarLinks.map(link => {
                link.active = false;
                if(link._id == action.payload) {
                    link.active = true;
                }
                return link;
            })
            return {
                ...state,
                navbarLinks
            }
        default: return state;
    }
}