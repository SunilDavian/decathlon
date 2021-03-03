import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Product from '../pages/products';
import Cart from "../pages/cart";
import Login from "../pages/login";
import ProductDetails from "../pages/products/productDetails";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Product} />
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
                <Route path="/product/details" component={ProductDetails} />
            </Switch>
        </Router>
    );
}

export default Routes;