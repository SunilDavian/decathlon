import actionTypes from './actionTypes';
import users from './userList';

function Login({ username, password, history, from }) {

    return (dispatch) => {

        const user = users.find(x => x.username === username && x.password === password);
        if (!user) {
            dispatch({
                type: actionTypes.LOGIN_FAILURE
            });

            return;
        }

        dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: { username }
        });

        history.push(from);
    }



}


const actions = {
    Login
};

export default actions;