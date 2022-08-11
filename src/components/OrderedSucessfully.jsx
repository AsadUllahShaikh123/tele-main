/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import successpic from '../assets/images/Group_8669.png';
import useAuth from '../shared/hooks/useAuth';

const tele = window?.Telegram?.WebApp;

function OrderedSucessfully() {
    const { finalOrder } = useAuth();
    const navigate = useNavigate();

    // axios
    //     .post(
    //         'https://api.telegram.org/bot5232763861:AAHX1M0DnwK7TqL7L0jLCPGNLn-I1WDvzMo/answerWebAppQuery',
    //         {
    //             web_app_query_id: window.Telegram.WebApp.initDataUnsafe.query_id,
    //             result: {
    //                 type: 'article',
    //                 id: 'ididid',
    //                 title: 'Заказ',
    //                 input_message_content: {
    //                     message_text: `I just completed my order! My orderID is ${window.Telegram.WebApp.initDataUnsafe.query_id}`,
    //                 },
    //             },
    //         }
    //     )
    //     .catch((err) => {
    //         this.isError = true;
    //     });

    const myPromise = () => {
        const myResolve = new Promise((resolve, reject) => {
            setTimeout(resolve, 1000);
        });
        toast.promise(myResolve, {
            pending: 'Processing Order Data..',
            success: 'Ordered Successfully!.',
        });
    };

    const sendData = () => {
        const data = JSON.stringify(finalOrder);
        tele.sendData(data);
        tele.close();
    };

    useEffect(() => {
        myPromise();
        setTimeout(() => {
            sendData();
        }, 5000);
    }, []);

    return (
        <div className="main-container bg-dark px-4 py-6">
            <ToastContainer theme="dark" />
            <div
                className="flex justify-between items-center"
                data-aos="fade-down"
                data-aos-duration="1500"
            >
                <Link to="/" className="no-underline text-offWhite">
                    <BsArrowLeft onClick={() => navigate('/')} />
                </Link>
                <Link to="/" className="no-underline text-offWhite">
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="text-sm text-offWhite"
                    >
                        Back
                    </button>
                </Link>
            </div>
            <hr className="my-4 text-offWhite" data-aos="fade-down" data-aos-duration="1500" />
            <div>
                <h1
                    className="text-white text-xl text-center mt-8 mb-8"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    Order Generated Successfully !
                </h1>
                <div className="w-full" data-aos="zoom-in" data-aos-duration="1500">
                    <img src={successpic} alt="success" className="mx-auto" />
                </div>
                <p
                    className="text-center text-green text-sm mt-2"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                >
                    Successfully Generated Your Invoice
                </p>
            </div>
            <div className="mt-16" data-aos="zoom-in" data-aos-duration="1500">
                <div className="flex justify-between items-center">
                    <h6 className="text-offWhite font-semibold text-sm">Order ID</h6>
                    <h6 className="text-white font-semibold text-sm">{`<ORDERID>`}</h6>
                </div>
                <div className="flex justify-between items-center my-6">
                    <h6 className="text-offWhite font-semibold text-sm">TX Address</h6>
                    <h6 className="text-white font-semibold text-sm">{`<ADDRESS>`}</h6>
                </div>
                <div className="flex justify-between items-center">
                    <h6 className="text-offWhite font-semibold text-sm">Amount</h6>
                    <h6 className="text-white font-semibold text-sm">{`<AMOUNT>`}</h6>
                </div>
            </div>
        </div>
    );
}

export default OrderedSucessfully;
