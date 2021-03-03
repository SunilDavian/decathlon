import { combineReducers } from 'redux';
import ProductList from './product/reducer';
import Cart from './cart/reducer';
import User from './user/reducer'

const combinedReducers = combineReducers({
    ProductList,
    Cart,
    User
});

export default combinedReducers;