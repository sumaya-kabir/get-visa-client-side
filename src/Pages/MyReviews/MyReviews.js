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
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`,{
            authorization: `Bearer ${localStorage.getItem('getvisa-token')}`
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                setreviews(data)
            })
    }, [user?.email])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete this review?')
        if (proceed) {
            fetch(`http://localhost:5000/myreviews/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                }
                },
                
            )
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged > 0) {
                        alert('Deleted Successfully');
                        const remaining = reviews.filter(rv => rv._id !== id);
                        setreviews(remaining);
                    }
                })
        }
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
                        
                        ></ReviewRow>)
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

export default MyReviews;