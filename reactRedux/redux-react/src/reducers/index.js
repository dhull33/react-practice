// this is the root reducer
import cart from './cart';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cart: cart
});
export default rootReducer;