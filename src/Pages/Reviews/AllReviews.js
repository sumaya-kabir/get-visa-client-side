import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from './Reviews';

const AllReviews = () => {
    const {reviews} = useLoaderData();
    console.log(reviews)
    return (
        <div>
            {
                            reviews.map(review => <Reviews
                            key={review.serviceId}
                            review={review}
                            ></Reviews>)
                        }
        </div>
    );
};

export default AllReviews;