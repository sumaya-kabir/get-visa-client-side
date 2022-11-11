import React, { useEffect, useState } from 'react';
import Reviews from './Reviews';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://getvisa-server.vercel.app/reviews?id=${reviews?.serviceId}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [reviews?.serviceId])

    return (
        <div>
            { 
                        reviews ?
                            reviews?.map(review => <Reviews
                            key={review._id}
                            review={review}
                            ></Reviews>)
                            : 
                            <p className='text-xl'>"No Reviews Found For This Service"</p>
                        }
        </div>
    );
};

export default AllReviews;