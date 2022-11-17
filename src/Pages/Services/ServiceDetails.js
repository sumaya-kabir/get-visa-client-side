import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import AddReviews from '../Reviews/AddReviews';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
    const { _id, title, picture, description, price } = useLoaderData();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/servicereviews?serviceId=${_id}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [_id])
    
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='m-6'>
                <h2 className='text-4xl font-semibold mb-5'>{title}</h2>

                <PhotoProvider>
                        <PhotoView src={picture}>
                            <img src={picture} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                
                <p className='mt-5 font-normal'>{description}</p>
                <p className='border border-orange-500 text-center text-xl text-orange-500 mt-5'>Service Charge: <span className='font-medium'> {price}$</span></p>
            </div>
            <div>
                <h2 className='text-2xl text-center'>Our Client Reviews</h2>

                <div className="">
                    <Card className='m-6'>
                        {
                            reviews ?
                            reviews.map(review => <Reviews
                                key={review._id}
                                review={review}
                                ></Reviews>)
                                : 
                            <p className='text-xl'>"No Reviews Found For This Service"</p>
                        }
                        
                    </Card>
                </div>
                <AddReviews></AddReviews>
            </div>
        </div>
    );
};

export default ServiceDetails;