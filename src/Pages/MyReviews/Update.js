import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
    const oneReview = useLoaderData();
    const [review, setReview] = useState(oneReview);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/myReviews";

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = {...review};
        newReview[field] = value;
        setReview(newReview);

    }

    const handleStatusUpdate = event => {
        event.preventDefault();
        console.log(review)
        fetch(`http://localhost:5000/myreviews/${oneReview._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('')}`
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                alert('Updated Successfully');
                navigate(from, {replace: true});
            }
        })
    }
    return (
        <div className='m-12'>
            <h2 className='text-4xl font-semibold pb-6'>Update This Review</h2>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="username"
                            value="Reviewer Name"
                        />
                    </div>
                    <TextInput
                        onChange={handleInputChange}
                        id="username3"
                        name="reviewer"
                        placeholder="Bonnie Green"
                        // required={true}
                        addon="#"
                    />
                </div>
                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                            value="Edit Review"
                        />
                    </div>
                    <Textarea
                        onChange={handleInputChange}
                        id="comment"
                        name="reviewText"
                        defaultValue={oneReview.reviewText}
                        required={true}
                        rows={4}
                    />
                </div>

                <Button
                 onClick={handleStatusUpdate}
                 type="submit">
                    Update
                </Button>
            </form>
        </div>
    );
};

export default Update;