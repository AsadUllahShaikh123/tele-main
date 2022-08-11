/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-plusplus */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-alert */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BsArrowLeft, BsFillBagCheckFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import btcpic from '../assets/images/btc.png';
import ethpic from '../assets/images/Eth.png';
import ltcpic from '../assets/images/litecoin.png';
import usdtpic from '../assets/images/usdt.png';
import xmrpic from '../assets/images/xmr.png';
import useAuth from '../shared/hooks/useAuth';

function Cart() {
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [tipsAmount, setTipsAmount] = useState(0);
    const { tgUser } = useAuth();

    const {
        cartItems,
        setCartItems,
        tip,
        setTip,
        subTotal,
        setSubTotal,
        total,
        setTotal,
        finalOrder,
        setFinalOrder,
    } = useAuth();
    const navigate = useNavigate();

    const calculateTotal = () => {
        let subtotal = 0;
        for (let i = 0; i < cartItems.length; i++) {
            subtotal += cartItems[i].price * cartItems[i].quantity;
        }
        setSubTotal(subtotal);
    };

    const notify = (tips) =>
        toast.success(` Your tip £${tips} has been added with the subtotal, thanks !`, {
            position: 'top-right',
            autoClose: 4000,
        });

    const addTip1 = () => {
        setTotal(subTotal + 1);
        const orderData = {
            orderedProduct: cartItems,
            orderDetails: {
                subtotal: subTotal,
                tip: 1,
                total: subTotal + 1,
            },
            username: tgUser,
            userWhoOrdered: 'which TG user ordered this, his/her info',
            shippingAddress: 'users shipping adsress',
            paymentInfo: 'users payment info',
        };
        setFinalOrder(orderData);
        setTip(true);
        setTipsAmount(1);
    };
    const addTip2 = () => {
        setTotal(subTotal + 2);
        const orderData = {
            orderedProduct: cartItems,
            orderDetails: {
                subtotal: subTotal,
                tip: 2,
                total: subTotal + 2,
            },
            username: tgUser,
            userWhoOrdered: 'which TG user ordered this, his/her info',
            shippingAddress: 'users shipping adsress',
            paymentInfo: 'users payment info',
        };
        setFinalOrder(orderData);
        setTip(true);
        setTipsAmount(2);
    };
    const addTip5 = () => {
        setTotal(subTotal + 5);
        const orderData = {
            orderedProduct: cartItems,
            orderDetails: {
                subtotal: subTotal,
                tip: 5,
                total: subTotal + 5,
            },
            username: tgUser,
            userWhoOrdered: 'which TG user ordered this, his/her info',
            shippingAddress: 'users shipping adsress',
            paymentInfo: 'users payment info',
        };
        setFinalOrder(orderData);
        setTip(true);
        setTipsAmount(5);
    };
    const addTip10 = () => {
        setTotal(subTotal + 10);
        const orderData = {
            orderedProduct: cartItems,
            orderDetails: {
                subtotal: subTotal,
                tip: 10,
                total: subTotal + 10,
            },
            username: tgUser,
            userWhoOrdered: 'which TG user ordered this, his/her info',
            shippingAddress: 'users shipping adsress',
            paymentInfo: 'users payment info',
        };
        setFinalOrder(orderData);
        setTip(true);
        setTipsAmount(10);
    };

    const pay = () => {
        const orderData = {
            orderedProduct: cartItems,
            orderDetails: {
                subtotal: subTotal,
                tip: 0,
                total: subTotal,
            },
            username: tgUser,
            userWhoOrdered: 'which TG user ordered this, his/her info',
            shippingAddress: 'users shipping adsress',
            paymentInfo: 'users payment info',
        };
        setFinalOrder(orderData);
    };

    useEffect(() => {
        calculateTotal();
        setTotal(subTotal);
    }, [subTotal]);

    useEffect(() => {
        if (tipsAmount > 0) notify(tipsAmount);
    }, [tipsAmount]);

    return (
        <>
            <ToastContainer theme="dark" />
            <div className="main-container bg-dark px-4 pt-6 mb-0 pb-0">
                <div
                    className="flex justify-between items-center"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                >
                    <BsArrowLeft onClick={() => navigate(-1)} />
                    <h2 className="text-center text-offWhite text-md">Confirm Your Order</h2>
                    <div className="flex justify-end items-center">
                        <button
                            type="button"
                            className="text-yellow text-sm"
                            onClick={() => navigate(-1)}
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                        >
                            Edit Order
                        </button>
                    </div>
                </div>
                <hr className="my-4 text-offWhite" data-aos="fade-down" data-aos-duration="1500" />
                {/* Order summary */}

                {cartItems.map((item, index) => (
                    <div
                        className="flex justify-start items-center mt-8 mb-8"
                        key={index}
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        <div className="flex justify-start items-center w-4/5">
                            <BsFillBagCheckFill className="text-green mr-6" />
                            <h4 className="text-offWhite text-md">
                                {item?.title}{' '}
                                <span className="text-yellow font-semibold ml-1.5 text-sm">
                                    {`(£${item?.price} * ${item?.quantity}x)`}
                                </span>{' '}
                            </h4>
                        </div>
                        <h4 className="text-white text-semibold ml-auto">{`£${(
                            item?.price.toFixed(2) * item?.quantity
                        ).toFixed(2)}`}</h4>
                    </div>
                ))}
                <hr className="text-offWhite" data-aos="fade-right" data-aos-duration="1500" />
                <div
                    className="flex justify-between items-center px-2 mt-1"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                >
                    <h6 className="text-white ">Subtotal</h6>
                    <h6 className="text-white ">{`£${subTotal.toFixed(2)}`}</h6>
                </div>

                {paymentMethod && (
                    <div className="mt-6 mb-12" data-aos="zoom-in" data-aos-duration="2500">
                        <h4 className="text-white text-sm text-center">
                            Tip <span className="text-offWhite">(optional)🙏 </span>{' '}
                        </h4>
                        <div className="flex justify-evenly items-center mt-3">
                            <button
                                type="button"
                                className="text-white bg-green pt-0.5 px-4 rounded-md text-center text-sm "
                                onClick={() => addTip1()}
                            >
                                £1
                            </button>
                            <button
                                type="button"
                                className="text-white bg-green pt-0.5 px-4 rounded-md text-center text-sm "
                                // onMouseEnter={() => pay()}
                                onClick={() => addTip2()}
                            >
                                £2
                            </button>
                            <button
                                type="button"
                                className="text-white bg-green pt-0.5 px-4 rounded-md text-center text-sm "
                                onClick={() => addTip5()}
                            >
                                £5
                            </button>
                            <button
                                type="button"
                                className="text-white bg-green pt-0.5 px-4 rounded-md text-center text-sm "
                                onClick={() => addTip10()}
                            >
                                £10
                            </button>
                        </div>
                    </div>
                )}
                <div
                    className="paymentMethod mt-4 mb-32"
                    data-aos="zoom-in"
                    data-aos-duration="2500"
                >
                    <h4 className="text-white text-md text-center">Select Your Payment Method</h4>
                    <div className="flex justify-center items-center flex-wrap gap-x-4 gap-y-4 mt-4">
                        <div className="cursor-pointer">
                            <img
                                src={btcpic}
                                alt="btc"
                                className="h-8 w-8"
                                onClick={() => setPaymentMethod('Bitcoin')}
                            />
                        </div>
                        <div className="cursor-pointer">
                            <img
                                src={ethpic}
                                alt="ltc"
                                className="h-8 w-8"
                                onClick={() => setPaymentMethod('Ethereum')}
                            />
                        </div>
                        <div className="cursor-pointer">
                            <img
                                src={usdtpic}
                                alt="usdt"
                                className=" h-8 w-8"
                                onClick={() => setPaymentMethod('USDT')}
                            />
                        </div>
                        <div className="cursor-pointer">
                            <img
                                src={ltcpic}
                                alt="ltc"
                                className="h-8 w-8"
                                onClick={() => setPaymentMethod('Litecoin')}
                            />
                        </div>

                        <div className="cursor-pointer">
                            <img
                                src={xmrpic}
                                alt="ltc"
                                className="h-8 w-8"
                                onClick={() => setPaymentMethod('Xmr')}
                            />
                        </div>
                    </div>
                    {paymentMethod && (
                        <h6
                            className="text-center text-sm text-offWhite mt-3"
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                        >{`(you are paying with ${paymentMethod})`}</h6>
                    )}
                </div>
            </div>
            <div>
                {!paymentMethod ? (
                    <button
                        type="button"
                        className="bg-gray py-3 px-6 text-center mt-16 w-full disabled cursor-not-allowed text-red text-sm fixed bottom-0"
                    >
                        Select Payment Method To Proceed
                    </button>
                ) : tip ? (
                    <Link to="/invoice" className="no-underline">
                        <button
                            type="button"
                            className="text-white bg-green py-3 px-6 text-center fixed bottom-0 w-full"
                        >
                            {`Pay (£${total.toFixed(2)})`}
                        </button>
                    </Link>
                ) : (
                    <Link to="/invoice" className="no-underline">
                        <button
                            type="button"
                            className="text-white bg-green py-3 px-6 text-center w-full fixed bottom-0"
                            onFocus={() => pay()}
                        >
                            {`Pay (£${total.toFixed(2)})`}
                        </button>
                    </Link>
                )}
            </div>
        </>
    );
}

export default Cart;
