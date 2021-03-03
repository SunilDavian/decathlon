import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';


export const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware
    )
);

function StoreProvider(props) {
    return (
        <Provider store={store}>
            <React.Fragment>
                {props.children}
            </React.Fragment>
        </Provider>
    );
}

export default StoreProvider;
