import React from 'react';
import Header from '../header';
import Footer from '../footer';

import 'bootswatch/dist/lux/bootstrap.css'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="container">
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;