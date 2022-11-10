import { Button, Label, Textarea } from 'flowbite-react';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AddReviews = () => {
    const {_id, title} = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReviewField = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'Unregistered';
        const reviewText = form.reviewText.value;

        const review = {
            serviceId: _id,
            serviceName: title,
            email,
            reviewText
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Review added successfully')
                form.reset()
            }
        })
        .catch(err => console.error(err))

    }

    return (
        <div className='ml-6'>

            {
                user?.uid ?
                    <>
                        <form onSubmit={handleReviewField}>
                            <div className='mb-3' id="textarea">
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="comment"
                                        value="Your Review"
                                    />
                                </div>
                                <Textarea
                                    id="comment"
                                    name="reviewText"
                                    placeholder="Leave a review..."
                                    required={true}
                                    rows={4}
                                />
                            </div>
                            <Button gradientDuoTone="pinkToOrange" type="submit">
                                Add
                            </Button>
                        </form>
                    </>
                    :
                    <h6 className='text-xl'>Please Login first to add a review</h6>
            }
        </div>
    );
};

export default AddReviews;