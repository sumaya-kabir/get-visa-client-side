import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData();
    useTitle('Services')
    return (
        <div>
            <h2 className='text-center text-5xl mb-12'>Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-10 mb-12">
            {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
            </div>
        </div>
    );
};

export default Services;