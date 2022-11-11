import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
    useTitle('My Reviews')
    const { user } = useContext(AuthContext);
    const [reviews, setreviews] = useState([]);

    useEffect(() => {
        fetch(`https://getvisa-server.vercel.app/reviews?email=${user?.email}`, {
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('')}`
            // }
        })
            .then(res => {
                // if(res.status === 401 || res.status === 403){
                //     return logOut()
                // }
                return res.json()
            })
            .then(data => {
                setreviews(data)
            })
    }, [user?.email])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete this review?')
        if (proceed) {
            fetch(`https://getvisa-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                // headers: {
                //     authorization: `Bearer ${localStorage.getItem('')}`
                // }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setreviews(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`https://getvisa-server.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('')}`
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = reviews.filter(rv => rv._id !== id);
                const approved = reviews.find(rv => rv._id === id);
                approved.status = "Approved";

                const newreview = [approved, ...remaining];
                setreviews(newreview);
            }
        })
    }
    return (
        <div>
            <Table hoverable={true}>
                <Table.Head>
                    <Table.HeadCell className="!p-4">
                        
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Review
                    </Table.HeadCell>
                    
                    <Table.HeadCell>
                        Service
                    </Table.HeadCell>
                    
                    <Table.HeadCell>
                        <span className="sr-only">
                            Edit
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        reviews.map(review => <ReviewRow
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                        handleStatusUpdate={handleStatusUpdate}
                        ></ReviewRow>)
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default MyReviews;