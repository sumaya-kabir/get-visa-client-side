import { Carousel } from 'flowbite-react';
import React from 'react';

const Slider = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000}>

                <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
                    <img src="https://images.pexels.com/photos/7888671/pexels-photo-7888671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="block  absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt=""/>
                        <div class="relative top-500 top-1/2 px-4 py-2 opacity-100 ">
                            <h6 className="text-xl text-white font-bold text-center ">Welcome to GET VISA</h6>
                            <h3 className="text-5xl text-white font-bold text-center ">Immegration And Visa Consultant Agent</h3>

                        </div>
                </div>

                <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
                    <img src="https://images.pexels.com/photos/7889237/pexels-photo-7889237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="block  absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt=""/>
                        <div class="relative top-500 top-1/2 px-4 py-4 opacity-100">
                            <h6 className="text-xl text-white font-bold text-center ">Welcome to GET VISA</h6>
                            <h3 className="text-5xl text-white font-bold text-center ">Immegration And Visa Consultant Agent</h3>

                        </div>
                </div>

                <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
                    <img src="https://images.pexels.com/photos/7888650/pexels-photo-7888650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="block  absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt=""/>
                        <div class="relative top-500 top-1/2 px-4 py-4 opacity-100">
                            <h6 className="text-xl text-white font-bold text-center ">Welcome to GET VISA</h6>
                            <h3 className="text-5xl text-white font-bold text-center ">Immegration And Visa Consultant Agent</h3>

                        </div>
                </div>

                <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
                    <img src="https://images.pexels.com/photos/6248947/pexels-photo-6248947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="block  absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt=""/>
                        <div class="relative top-500 top-1/2 px-4 py-2 opacity-100 ">
                            <h6 className="text-xl text-white font-bold text-center ">Welcome to GET VISA</h6>
                            <h3 className="text-5xl text-white font-bold text-center ">Immegration And Visa Consultant Agent</h3>

                        </div>
                </div>
                
                <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
                    <img src="https://images.pexels.com/photos/6248978/pexels-photo-6248978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="block  absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt=""/>
                        <div class="relative top-500 top-1/2 px-4 py-2 opacity-100 ">
                            <h6 className="text-xl text-white font-bold text-center ">Welcome to GET VISA</h6>
                            <h3 className="text-5xl text-white font-bold text-center ">Immegration And Visa Consultant Agent</h3>

                        </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;