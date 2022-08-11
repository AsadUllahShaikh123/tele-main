/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useState } from 'react';

const AllStates = () => {
    // states
    const [cartItems, setCartItems] = useState([]);
    const [count, setCount] = useState(0);
    const [tip, setTip] = useState(false);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [finalOrder, setFinalOrder] = useState({});
    const [tgUser, setTGUser] = useState('');

    return {
        cartItems,
        setCartItems,
        count,
        setCount,
        tip,
        setTip,
        subTotal,
        setSubTotal,
        total,
        setTotal,
        finalOrder,
        setFinalOrder,
        tgUser,
        setTGUser,
    };
};

export default AllStates;
