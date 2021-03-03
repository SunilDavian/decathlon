import actionTypes from './actionTypes';

function addToCart(data) {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: data
    }
}


function increaseToCart(data) {
    return {
        type: actionTypes.INCREASE_ITEM,
        payload: data
    }
}

function decreaseToCart(data) {
    return {
        type: actionTypes.DECREASE_ITEM,
        payload: data
    }
}

function removeItemFromCart(data) {
    return {
        type: actionTypes.DECREASE_ITEM,
        payload: data
    }
}

function clearCart(data) {
    return {
        type: actionTypes.CLEAR_CART,
        payload: data
    }
}

function checkout(data) {
    return {
        type: actionTypes.CHECKOUT,
        payload: data
    }
}
const actions = {
    addToCart,
    increaseToCart,
    decreaseToCart,
    removeItemFromCart,
    clearCart,
    checkout
};

export default actions;