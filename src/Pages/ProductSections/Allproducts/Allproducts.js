import React, { useEffect, useState } from 'react';
import './Allproducts.css';
import Allproduct from '../Allproduct/Allproduct';

const Allproducts = () => {
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
            <h2 className="text-info text-center mb-3 bg-white">Car Store</h2>
            <hr />
            <div className="service-container">
                {
                    services.map(service => <Allproduct
                        key={service._id}
                        service={service}
                    ></Allproduct>)
                }
            </div>
        </div>
    );
};

export default Allproducts;