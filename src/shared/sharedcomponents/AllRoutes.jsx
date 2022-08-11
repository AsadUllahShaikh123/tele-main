import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../../components/Cart';
import GenerateInvoice from '../../components/GenerateInvoice';
import OrderedSucessfully from '../../components/OrderedSucessfully';
import Product from '../../components/Product';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/invoice" element={<GenerateInvoice />} />
            <Route path="/success" element={<OrderedSucessfully />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/:producttype" element={<Product />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AllRoutes;
