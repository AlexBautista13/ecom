import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'; 

import headerNavbar from './headernavbarReducer';
import user from './userReducer';
import shop from './shopReducer';

const rootReducer = combineReducers({
  form,
  headerNavbar,
  user,
  shop
});

export default rootReducer; 