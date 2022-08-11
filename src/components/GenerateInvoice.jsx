/* eslint-disable no-unused-vars */
/* eslint-disable no-promise-executor-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/images/Group_8671.png';
import Classes from '../styles/Invoice.module.css';

function GenerateInvoice() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/success');
        }, 6500);
    }, []);

    return (
        <div className="main-container bg-dark px-4 py-6">
            <div
                className="flex justify-start items-center"
                data-aos="fade-down"
                data-aos-duration="1500"
            >
                <Link to="/" className="no-underline text-offWhite">
                    <BsArrowLeft onClick={() => navigate('/')} />
                </Link>
            </div>
            <hr className="my-4 text-offWhite" data-aos="fade-down" data-aos-duration="1500" />
            <div>
                <h1
                    className="text-white text-2xl text-center mt-8 mb-2"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    Creating Your Order
                </h1>
                <h4
                    className="text-offWhite text-md text-center mb-10"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    Please wait a moment
                </h4>
                <div
                    className="w-4/5 mx-auto bg-gray rounded-lg"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                >
                    <div
                        className={`bg-green text-xs font-medium text-white text-center py-1 px-0.5 leading-none rounded-full ${Classes.myProgressAnimation}`}
                    >
                        {' '}
                    </div>
                </div>
                <img
                    src={logo}
                    alt="logo"
                    className={`mx-auto mt-16 ${Classes.myLogo} mb-12`}
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                />
            </div>
        </div>
    );
}

export default GenerateInvoice;
