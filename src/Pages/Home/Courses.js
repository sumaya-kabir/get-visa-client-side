import { Card, Carousel } from 'flowbite-react';
import React from 'react';

const Courses = () => {
    return (
        <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96 mb-12">
            <Carousel>
                <div className="max-w-sm bg-orange-300">
                    <Card className='' imgSrc="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Graduate Re Exam
                        </h5>
                        
                    </Card>
                </div>
                <div className="max-w-sm">
                    <Card imgSrc="https://images.pexels.com/photos/4226262/pexels-photo-4226262.jpeg?auto=compress&cs=tinysrgb&w=600">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            IELTS Coaching
                        </h5>
                        
                    </Card>
                </div>
            </Carousel>
            <Carousel indicators={false}>
                <div className="max-w-sm">
                    <Card imgSrc="https://images.pexels.com/photos/2897053/pexels-photo-2897053.jpeg?auto=compress&cs=tinysrgb&w=600">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            PTE Coaching
                        </h5>
                        
                    </Card>
                </div>
                <div className="max-w-sm">
                    <Card imgSrc="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Improve Communication Skills
                        </h5>
                        
                    </Card>
                </div>
            </Carousel>
        </div>
    );
};

export default Courses;