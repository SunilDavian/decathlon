import React from 'react';
import { Link } from 'react-router-dom';
import action from '../../store/cart/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { formatNumber } from '../../helpers/utils'


const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.Cart);


    const increase = product => {
        dispatch(action.increaseToCart(product));
    }


    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    const addProduct = product => {
        dispatch(action.addToCart(product));
    }

    return (

        <div className="card card-body">
            <Link to={{
                pathname: "/product/details",
                state: {
                    product
                }
            }} className="btn btn-link btn-sm mr-2">
                <img style={{ display: "block", margin: "0 auto 10px", maxHeight: "200px" }} className="img-fluid"
                    src={product.photo + '?v=' + product.id} alt="" />
                <p>{product.name}</p>
                <h3 className="text-left">{formatNumber(product.price)}</h3>
            </Link>
            <div className="text-right">

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
        </div>
    );
}

export default ProductItem;