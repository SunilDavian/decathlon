import React, { useState } from 'react';
import Layout from '../../components/common/layout';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import action from '../../store/user/action';
import { useSelector } from 'react-redux';

function Login(props) {

    const { is_login_failed } = useSelector(state => state.User);

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });

    const { username, password } = inputs;

    const dispatch = useDispatch();
    const location = useLocation();


    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (username && password) {
            const { from } = location.state || { from: { pathname: "/" } };
            dispatch(action.Login({ username, password, history: props.history, from }));
        }
    }
    return (
        <Layout title="Cart" description="This is the Cart page" >
            <form onSubmit={handleSubmit}>
                <h3>Log in</h3>


                <div className="form-group">
                    <label>Email</label>
                    <input value={username} name="username" onChange={handleChange} type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" value={password} onChange={handleChange} type="password" className="form-control" placeholder="Enter password" />
                </div>


                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p style={{ fontWeight: 'bold', color: 'red' }}>{is_login_failed ? 'Login Failed. Try Again' : ''}</p>
            </form>
        </Layout>
    )
}


export default Login;
