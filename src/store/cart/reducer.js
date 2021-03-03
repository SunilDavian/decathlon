import actionType from './actionTypes';
import initialState from './initialState';

export const sumItems = cartItems => {
    let totalItem = cartItems.reduce((total, product) => total + product.quantity, 0);
    let totalPrice = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { totalItem, totalPrice }
}

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            if (!state.cartItems.find(item => item.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }

            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case actionType.REMOVE_ITEM:
            return {
                ...state,
                ...sumItems(state.cartItems.filter(item => item.id !== action.payload.id)),
                cartItems: [...state.cartItems.filter(item => item.id !== action.payload.id)]
            }
        case actionType.INCREASE_ITEM:
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity++
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case actionType.DECREASE_ITEM:
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity--
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case actionType.CHECKOUT:
            return {
                cartItems: [],
                checkout: true,
                ...sumItems([]),
            }
        case actionType.CLEAR_CART:
            return {
                cartItems: [],
                ...sumItems([]),
            }
        default:
            return state

    }
}

export default CartReducer;