/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import ProvidersCard from '../components/ProvidersCard';
// import products from '../shared/data/db';
// import products from '../shared/data/finalDB';
import useAuth from '../shared/hooks/useAuth';
import useFetchProducts from '../shared/hooks/useFetchProducts';

// console.log(products);

AOS.init();

const tele = window.Telegram.WebApp;
tele.expand(true);
const initdataunsafe = window.Telegram.WebApp.initDataUnsafe;

function Home() {
    const { products, isLoading, error } = useFetchProducts();
    const [services, setServices] = useState(true);
    const [scans, setScans] = useState(false);
    const [uploads, setUploads] = useState(false);
    const [databases, setDatabases] = useState(false);
    const { tgUser, setTGUser } = useAuth();
    useEffect(() => {
        setTGUser(initdataunsafe?.user?.username);
    }, [tgUser]);

    const showServices = () => {
        setServices(!services);
        setScans(false);
        setUploads(false);
        setDatabases(false);
    };
    const showScans = () => {
        setServices(false);
        setScans(!scans);
        setUploads(false);
        setDatabases(false);
    };
    const showUploads = () => {
        setServices(false);
        setScans(false);
        setUploads(!uploads);
        setDatabases(false);
    };
    const showDatabases = () => {
        setServices(false);
        setScans(false);
        setUploads(false);
        setDatabases(!databases);
    };

    useEffect(() => {
        tele.ready();
    });

    return (
        <div className="main-container bg-dark px-4 py-6">
            <div className="flex justify-center items-center">
                <h2
                    className="text-center text-offWhite text-lg -ml-10"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                >
                    Choose Type
                </h2>
            </div>
            <hr className="my-4 text-offWhite" data-aos="fade-down" data-aos-duration="1500" />
            <div
                className="mt-2 grid grid-cols-2 gap-x-2.5 gap-y-1"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <div className="py-1.5 px-3 bg-gray flex justify-between items-center rounded-lg">
                    <label htmlFor="vue-checkbox-list">Services</label>
                    <input
                        id="services"
                        type="checkbox"
                        checked={services}
                        className="h-3.5 w-3.5 accent-green"
                        onChange={() => showServices()}
                    />
                </div>
                <div className="py-1.5 px-3 bg-gray flex justify-between items-center rounded-lg">
                    <label htmlFor="vue-checkbox-list">Scans</label>
                    <input
                        id="Scans"
                        type="checkbox"
                        value=""
                        checked={scans}
                        className="h-3.5 w-3.5 accent-green"
                        onChange={() => showScans()}
                    />
                </div>
                <div className="py-1.5 px-3 bg-gray flex justify-between items-center rounded-lg">
                    <label htmlFor="vue-checkbox-list">Uploads</label>
                    <input
                        id="uploads"
                        type="checkbox"
                        value=""
                        checked={uploads}
                        className="h-3.5 w-3.5 accent-green"
                        onChange={() => showUploads()}
                    />
                </div>
                <div className="py-1.5 px-3 bg-gray flex justify-between items-center rounded-lg">
                    <label htmlFor="vue-checkbox-list">Databases</label>
                    <input
                        id="databases"
                        type="checkbox"
                        checked={databases}
                        value=""
                        className="h-3.5 w-3.5 accent-green"
                        onChange={() => showDatabases()}
                    />
                </div>
            </div>
            {/* providers area */}
            {services ? (
                <>
                    <h1
                        className="text-white mt-7 mb-3 text-lg shadow-sm"
                        data-aos="flip-left"
                        data-aos-duration="1500"
                    >
                        Providers{' '}
                        <span className="text-sm text-offWhite font-semibold">{`(${products?.length})`}</span>
                    </h1>
                    {!isLoading && !error && (
                        <div className="grid grid-cols-1 gap-y-4 mb-4">
                            {products.map((product, index) => (
                                <ProvidersCard product={product} key={index} />
                            ))}
                        </div>
                    )}
                </>
            ) : null}
            {scans ? (
                <>
                    <h1
                        className="text-white mt-7 mb-3 text-lg shadow-sm"
                        data-aos="flip-left"
                        data-aos-duration="1500"
                    >
                        Scans{' '}
                        <span className="text-sm text-offWhite font-semibold">{`(${0})`}</span>
                    </h1>
                    <div className="grid grid-cols-1 gap-y-4 mb-4">
                        <h1
                            className="text-offWhite text-md text-center"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            No Scan Product avilable now
                        </h1>
                    </div>
                </>
            ) : null}
            {uploads ? (
                <>
                    <h1
                        className="text-white mt-7 mb-3 text-lg shadow-sm"
                        data-aos="flip-left"
                        data-aos-duration="1500"
                    >
                        Uploads{' '}
                        <span className="text-sm text-offWhite font-semibold">{`(${0})`}</span>
                    </h1>
                    <div className="grid grid-cols-1 gap-y-4 mb-4">
                        <h1
                            className="text-offWhite text-md text-center"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            No Uploads Product avilable now
                        </h1>
                    </div>
                </>
            ) : null}
            {databases ? (
                <>
                    <h1
                        className="text-white mt-7 mb-3 text-lg shadow-sm"
                        data-aos="flip-left"
                        data-aos-duration="1500"
                    >
                        Databases{' '}
                        <span className="text-sm text-offWhite font-semibold">{`(${0})`}</span>
                    </h1>
                    <div className="grid grid-cols-1 gap-y-4 mb-4">
                        <h1
                            className="text-offWhite text-md text-center"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            No Databases Product avilable now
                        </h1>
                    </div>
                </>
            ) : null}
        </div>
    );
}

export default Home;
