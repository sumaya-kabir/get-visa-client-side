import { Card } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
    const { title, picture, description, price, reviews } = useLoaderData();
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
                        <div>
                            {
                                reviews.map(review => <Reviews
                                review={review}
                                ></Reviews>)
                            }
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;