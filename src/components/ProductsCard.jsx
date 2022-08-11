/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BsCurrencyEuro, BsDashSquareFill, BsFillPlusSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useAuth from '../shared/hooks/useAuth';

function ProductsCard({ services }) {
    const { cartItems, setCartItems } = useAuth();

    const addToCart = (id) => {
        const filtered = services.filter((service) => service.id === id);
        setCartItems([...cartItems, filtered[0]]);
        if (filtered) {
            filtered[0].quantity += 1;
        }
    };
    const onAdd = (id) => {
        const item = cartItems.find((x) => x.id === id);
        if (item) {
            setCartItems(
                cartItems.map((x) => (x.id === id ? { ...item, quantity: item.quantity + 1 } : x))
            );
        } else {
            addToCart(id);
        }
    };

    const handleIncrement = (id) => {
        onAdd(id);
    };
    const handleDecrement = (id) => {
        const item = cartItems.find((x) => x.id === id);
        if (item.quantity === 1) {
            setCartItems(cartItems.filter((x) => x.id !== id));
        } else {
            setCartItems(
                cartItems.map((x) => (x.id === id ? { ...item, quantity: item.quantity - 1 } : x))
            );
        }
    };

    useEffect(() => {
        const filtered = services.filter((service) => service.id === cartItems[0]?.id);
        if (filtered) {
            setCartItems([]);
        }
    }, []);

    return (
        <div className="grid grid-cols-1 gap-y-6">
            {services?.map((service) => (
                <div
                    className="bg-gray rounded-xl py-2.5 px-5"
                    key={service.id}
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                >
                    <div className="p-1 flex justify-between items-center">
                        <div className="w-2/3 -ml-1">
                            <h2 className="text-white text-md">{service.title}</h2>
                            <h4 className="text-offWhite mt-1 text-sm">{service.description}</h4>
                            <div
                                className="flex justify-start items-center"
                                data-aos="zoom-in"
                                data-aos-duration="3000"
                            >
                                <BsCurrencyEuro className=" text-sm font-semibold text-yellow mt-1" />
                                <h6 className="text-yellow mt-1 text-sm font-semibold">{`${service.price}`}</h6>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            {cartItems.find((x) => x.id === service.id) ? (
                                <div
                                    className="flex justify-around items-center"
                                    key={Math.random() * 1500}
                                >
                                    <button
                                        type="button"
                                        onClick={() => handleDecrement(service.id)}
                                    >
                                        <BsDashSquareFill
                                            className="text-xl"
                                            style={{ color: `#fc4736` }}
                                        />
                                    </button>

                                    <h4 className="text-white w-11 text-center">
                                        {cartItems.find((x) => x.id === service.id).quantity}
                                    </h4>
                                    <button
                                        type="button"
                                        onClick={() => handleIncrement(service.id)}
                                    >
                                        <BsFillPlusSquareFill
                                            className="text-xl"
                                            style={{ color: `#39b34b` }}
                                        />
                                    </button>
                                </div>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => addToCart(service.id)}
                                    className="px-3 py-2 bg-green text-white text-sm text-center rounded-md ml-auto"
                                >
                                    Add to cart{' '}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            {cartItems?.length > 0 ? (
                <Link to="/cart" className="no-underline text-white">
                    <button
                        type="button"
                        className="text-white bg-green py-3 text-center w-full fixed bottom-0 left-0 right-0"
                    >
                        Proceed To Cart
                    </button>
                </Link>
            ) : null}
        </div>
    );
}

export default ProductsCard;
