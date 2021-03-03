import React, { useState } from 'react'
import Layout from '../../components/common/layout';
import Modal from '../../components/common/modal';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartProducts from './cartProducts';
import action from '../../store/cart/action';
import { useDispatch } from 'react-redux';
import style from './CartProducts.module.scss';
import { formatNumber } from '../../helpers/utils'


function Cart(props) {
    const dispatch = useDispatch();
    const [isOpen, setModalView] = useState(false);

    const { cartItems, checkout, totalCount, totalPrice } = useSelector(state => state.Cart);
    const { is_authenticated } = useSelector(state => state.User);

    const clearCart = _ => {
        dispatch(action.clearCart());
    }

    const handleCheckout = _ => {
        if (is_authenticated) {
            setModalView(true)
        } else {
            props.history.push('/login', { from: './cart' });
        }
    }

    const onCheckoutSuccess = () => {
        setModalView(false)
        dispatch(action.checkout());
    }

    return (
        <Layout title="Cart" description="This is the Cart page" >

            <Modal isOpen={isOpen} onSuccess={onCheckoutSuccess} onClose={() => setModalView(false)}>

                <div className={style['modal-content']}>
                    Do you really want to checkout ?
                </div>

            </Modal>

            <div >
                <div className="text-center mt-5">
                    <h1>Cart</h1>
                    <p>This is the Cart Page.</p>
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            cartItems.length > 0 ?
                                <CartProducts /> :
                                <div className="p-3 text-center text-muted">
                                    Your cart is empty
                            </div>
                        }

                        {checkout &&
                            <div className="p-3 text-center text-success">
                                <p>Checkout successfull</p>
                                <Link to="/" className="btn btn-outline-success btn-sm">BUY MORE</Link>
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 &&
                        <div className="col-sm-3 p-3">
                            <div className="card card-body">
                                <p className="mb-1">Total Items</p>
                                <h4 className=" mb-3 txt-right">{totalCount}</h4>
                                <p className="mb-1">Total Payment</p>
                                <h3 className="m-0 txt-right">{formatNumber(totalPrice)}</h3>
                                <hr className="my-4" />
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary mb-2" onClick={handleCheckout}>CHECKOUT</button>
                                    <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button>
                                </div>

                            </div>
                        </div>
                    }
                </div>
            </div >
        </Layout >
    )

}

export default Cart;