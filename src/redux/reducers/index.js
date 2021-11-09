import { combineReducers } from 'redux';
import filters from './filters';
import pizzaz  from './pizzaz';
import cart  from './cart';

const rootReducer = combineReducers({
  filters,
  pizzaz,
  cart
});

export default rootReducer;