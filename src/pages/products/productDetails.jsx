import React from 'react'
import Layout from '../../components/common/layout';
import { useDispatch } from 'react-redux';
import action from '../../store/cart/action';
import { formatNumber } from '../../helpers/utils'
import { useSelector } from 'react-redux';


function ProductDetails(props) {

    const { product } = props.location.state;

    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.Cart);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    const addProduct = product => {
        dispatch(action.addToCart(product));
    }

    const increase = product => {
        dispatch(action.increaseToCart(product));
    }


    return (
        <Layout>
            <h1>{product.name} Details</h1>

            <div style={{ display: 'flex', marginTop: '5rem' }}>

                <div className="card" style={{ width: '30rem', height: '15rem' }}>
                    <img style={{ display: "block", margin: "0 auto 10px", maxHeight: "200px" }} className="img-fluid"
                        src={product.photo + '?v=' + product.id} alt="" />

                </div>

                <div className='card-body' style={{ marginLeft: '5rem' }}>
                    <p style={{ fontWeight: 'bold' }}>{product.name}</p>
                    <div>Special price</div>
                    <h3 className="text-left">{formatNumber(product.price)}</h3>
                </div>

            </div>

            <div style={{ marginTop: '50px' }}>

                {!isInCart(product) && <button
                    onClick={() => addProduct(product)}
                    className="btn btn-primary btn-sm">Add to cart</button>}

                {
                    isInCart(product) &&
                    <button
                        onClick={() => increase(product)}
                        className="btn btn-outline-primary btn-sm">Add more</button>
                }
            </div>


        </Layout>
    )

}

export default ProductDetails;