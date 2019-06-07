import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'; 

import headerNavbar from './headernavbarReducer';

const rootReducer = combineReducers({
  form,
  headerNavbar
});

export default rootReducer