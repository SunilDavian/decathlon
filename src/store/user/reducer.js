import { act } from 'react-dom/test-utils';
import actionTypes from './actionTypes';


export default function User(state = { is_authenticated: false }, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            state = {
                ...state,
                is_authenticated: true,
                ...action.payload
            }
            return state;
        case actionTypes.LOGIN_FAILURE:
            state = {
                is_login_failed: true,
                is_authenticated: false
            }
            return state;
        case actionTypes.LOGOUT:
            state = {
                is_authenticated: false
            }
            return state;
        default:
            return state;
    }
}
