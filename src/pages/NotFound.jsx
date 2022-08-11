import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="flex justify-center items-center flex-col mt-52">
            <h3 className="text-red text-xl text-center font-bold mb-6">
                sorry ! page not found !!
            </h3>
            <Link to="/" className="no-underline text-white">
                <button type="button" className="p-2 bg-green text-center rounded-md">
                    Back to home
                </button>
            </Link>
        </div>
    );
}

export default NotFound;
