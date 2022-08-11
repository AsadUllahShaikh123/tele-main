import React from 'react';

export default function useFetchProducts() {
    const [products, setProducts] = React.useState([]);
    const [error, setError] = React.useState();
    const [isLoading, setLoading] = React.useState(false);

    React.useEffect(() => {
        fetch('https://71b2-81-242-124-45.eu.ngrok.io/products_records')
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setProducts(data);
            })
            .catch((err) => setError(err));
    }, []);
    return { products, error, isLoading };
}
