import React from 'react';
import { useSelector } from 'react-redux';

import CartItem from './cartItem';
import styles from './CartProducts.module.scss';

const CartProducts = () => {

    const { cartItems } = useSelector(state => state.Cart);

    return (
        <div className={styles.p__container}>
            <div className="card card-body border-0">

                {
                    cartItems.map(product => <CartItem key={product.id} product={product} />)
                }

            </div>
        </div>

    );
}

export default CartProducts;