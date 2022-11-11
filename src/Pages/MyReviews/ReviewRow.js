import { Table } from 'flowbite-react';
import React from 'react';

const ReviewRow = ({review, handleDelete, handleStatusUpdate}) => {
    const {_id, serviceName, reviewText} = review;
    // const [reviewService, setReviewService] = useState({});


    // useEffect( () => {
    //     fetch(`https://getvisa-server.vercel.app/reviews/${serviceId}`)
    //     .then(res => res.json())
    //     .then( data => setReviewService(data))
    // }, [serviceId])
    return (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="!p-4">
                            <button onClick={()=>handleDelete(_id)}>X</button>
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {reviewText}
                        </Table.Cell>
                        
                        <Table.Cell>
                        {serviceName}
                        </Table.Cell>
                        
                        <Table.Cell>
                            <button
                                onClick={handleStatusUpdate}
                                className="font-medium text-orange-500 hover:underline dark:text-blue-500"
                            >
                                Edit
                            </button>
                        </Table.Cell>
                    </Table.Row>
       
    );
};

export default ReviewRow;