/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import dpd from '../assets/images/dpd.png';
import hermes from '../assets/images/hermes.png';
import parcelforce from '../assets/images/parcelforce.png';
import royalmail from '../assets/images/royalmail.png';
import scanv2 from '../assets/images/scanv2.png';
import ups from '../assets/images/ups.png';

function ProvidersCard({ product }) {
    console.log(product);
    let img = '';
    const { id, title, description, rating, services } = product;
    if (id === 'royal_mail') {
        img = royalmail;
    } else if (id === 'evri_hermes') {
        img = hermes;
    } else if (id === 'ups') {
        img = ups;
    } else if (id === 'scans') {
        img = scanv2;
    } else if (id === 'parcelforce') {
        img = parcelforce;
    } else if (id === 'dpd') {
        img = dpd;
    }

    return (
        <div className="bg-gray rounded-xl py-1.5" data-aos="zoom-in" data-aos-duration="1500">
            <div className="grid grid-cols-12 gap-x-4">
                <div className="col-span-4">
                    <img src={img} alt="product" className=" h-full w-full" />
                </div>
                {/* description */}
                <div className="flex justify-center items-center flex-col col-span-8">
                    <div className="text-center">
                        <h2 className="text-white text-md">{title}</h2>
                        <h4 className="text-offWhite my-2 text-sm">{description}</h4>
                    </div>
                    <div className="flex justify-center items-center mt-3">
                        <div>
                            <Link to={`/${id}`}>
                                <button type="button" className="primary-btn">
                                    Choose
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProvidersCard;
