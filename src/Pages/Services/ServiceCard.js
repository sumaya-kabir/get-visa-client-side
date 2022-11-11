import { Button, Card } from 'flowbite-react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, picture, title, description } = service;
    return (
        <div>
            <div className="max-w-sm">
                <Card
                    horizontal={true}
                    // imgSrc={picture}
                    className=' hover:bg-orange-300'
                >
                    <PhotoProvider>
                        <PhotoView src={picture}>
                            <img src={picture} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {description.slice(0, 100)}...
                    </p>
                    <div>
                    <Link to={`/services/${_id}`}>
                        <Button
                            outline={true}
                            gradientDuoTone="pinkToOrange"
                        >
                            View Details
                        </Button>
                        </Link>
                    </div>
                </Card>

            </div>
        </div>
    );
};

export default ServiceCard;