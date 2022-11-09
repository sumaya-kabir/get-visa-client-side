import { Button, Card } from 'flowbite-react';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';


const HomeServiceCard = ({ service }) => {
    const [flipped, setFlipped] = useState(false);
    const {_id, title, picture, price, description} = service;

    const handleMouseOverFlipping = (event) => {
        event.preventDefault();
        setFlipped(true);
    }

   const handleMouseMoveFlipping = (event) => {
        event.preventDefault();
        setFlipped(false);
    }
    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
                <Card  
                imgSrc={picture}
                className='text-center h-96' onMouseOver={handleMouseOverFlipping}>
                
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p className="text-orange-400 text-xl font-normal text-gray-700 dark:text-gray-400">
                        {price}$
                    </p>
                    
                </Card>

                <Card className='text-center h-96 bg-orange-300' onMouseOut={handleMouseMoveFlipping}>
                    <p className='text-orange-400'>VISA TYPE</p>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    {description.slice(0, 100)}
                    </p>
                    
                    <Button  gradientDuoTone="pinkToOrange">
                    <Link to={`/services/${_id}`}>
                        View Details
                    </Link>
                    </Button>
                    
                    
                </Card>
            
        </ReactCardFlip>
    );
};

export default HomeServiceCard;