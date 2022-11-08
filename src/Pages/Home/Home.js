import React from 'react';
import useTitle from '../../hooks/useTitle';
import Slider from './Banner/Slider';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
        </div>
    );
};

export default Home;