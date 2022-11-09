import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {title, picture, description, price} = useLoaderData();
    return (
        <div>
            <h2 className='text-4xl font-semibold'>{title}</h2>
            <img src={picture} alt="" />
            <p>{description}</p>
            <p className='text-xl text-orange-500'>Price: <span className='font-medium'> {price}$</span></p>
        </div>
    );
};

export default ServiceDetails;