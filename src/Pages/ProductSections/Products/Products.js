import React, { useEffect, useState } from 'react';
import './Products.css';
import Product from '../Product/Product';

const Products = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        // const url = 'https://warm-spire-28182.herokuapp.com/service';
        const url = 'https://limitless-forest-07232.herokuapp.com/products';

        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className='container'>
            <hr />
            <h2 className="text-info text-center mt-5 pb-2 bg-white">Car Store</h2>
            <hr />
            <div className="service-container">
                {
                    services.slice(0, 6).map(service => <Product
                        key={service._id}
                        service={service}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;