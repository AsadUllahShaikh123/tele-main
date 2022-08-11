/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import useFetchProducts from '../shared/hooks/useFetchProducts';
// import products from '../shared/data/finalDB';
import ProductsCard from './ProductsCard';

function Product() {
    const { producttype } = useParams();
    const { products, isLoading, error } = useFetchProducts();
    const [filteredProduct, setFilteredProduct] = useState([]);
    const filtering = () => {
        const filteredProd = products.filter((product) => product.id === producttype);
        console.log(filteredProd);
        setFilteredProduct(filteredProd);
    };

    useEffect(() => {
        filtering();
    });
    console.log('producttype', producttype);
    return (
        <div className="main-container bg-dark px-4 py-6">
            <div className="flex justify-between items-center">
                <Link to="/" className="no-underline text-offWhite">
                    <BsArrowLeft />
                </Link>
                <h1 className="text-offWhite text-md shadow-sm text-center">{`Choose ${filteredProduct[0]?.title}'s products`}</h1>
                <p />
            </div>
            <hr className="my-4 text-offWhite" />
            {/* providers area */}
            {isLoading && !error ? (
                <h1>Loading...</h1>
            ) : (
                <div className="grid grid-cols-1 gap-y-8 mt-8 mb-20">
                    {products
                        .filter((p) => p.id === producttype)
                        .map((product, index) => (
                            <div>
                                <ProductsCard services={product?.services} key={index} />
                            </div>
                        ))}
                </div>
            )}
            {error && <div>{error.message}</div>}
        </div>
    );
}

export default Product;
