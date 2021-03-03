import React from 'react';
import { Link } from "react-router-dom";
import { CartIcon, LoginIcon, UserProfileIcon } from '../../icons';
import styles from './header.module.scss';
import { useSelector } from 'react-redux';

const Header = () => {

    const { totalItem } = useSelector(state => state.Cart);
    const { is_authenticated } = useSelector(state => state.User);


    return (
        <header className={styles.header}>
            <Link to='/'>Product</Link>
            <Link to='/cart'> <CartIcon /> Cart ({totalItem})</Link>
            {
                is_authenticated ? <span style={{ float: 'right' }}>
                    Account
                    <UserProfileIcon /> </span> : <Link to='/login'> <LoginIcon /> Login</Link>
            }
        </header>
    );
}

export default Header;