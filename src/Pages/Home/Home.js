import { Button } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Slider from './Banner/Slider';
import HomeServiceCard from './HomeServiceCard';

const Home = () => {
    useTitle('Home');
    const servicesHome = useLoaderData();
    return (
        <div>
            <Slider></Slider>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-12 p-12'>
                {
                    servicesHome.map(service => <HomeServiceCard
                    key={service._id}
                    service={service}
                    ></HomeServiceCard>)
                }
                <div></div>
                <div className='ml-28 mt-12'>
                        <Button
                            outline={true}
                            gradientDuoTone="pinkToOrange"
                        >
                            <Link to='/services'>View All</Link>
                        </Button>
                    </div>
            </div>
            
        </div>
    );
};

export default Home;