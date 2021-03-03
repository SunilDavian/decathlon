import React from 'react';
import ProductItem from './productItem';
import styles from './ProductsGrid.module.scss';
import { useSelector } from 'react-redux';

const ProductsGrid = () => {
    const products = useSelector(state => state.ProductList);

    return (
        <div className={styles.p__container}>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {products.length} Products
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <input type="text" name="" placeholder="Search product" className="form-control" id="" />
                    </div>
                </div>
            </div>
            <div className={styles.p__grid}>

                {
                    products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))
                }

            </div>
            <div className={styles.p__footer}>

            </div>
        </div>
    );
}

export default ProductsGrid;