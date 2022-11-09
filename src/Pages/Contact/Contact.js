import { Button, Label, Select, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import useTitle from '../../hooks/useTitle';
import { FaLocationArrow, FaEnvelope, FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";

const Contact = () => {
    useTitle('Contact')
    return (
        <div className='grid grid-cols-2'>
            <div>
                <h2 className='text-3xl'>Contact Us</h2>
                <form className="flex flex-col gap-4 m-5">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="firstName"
                                value="First Name"
                            />
                        </div>
                        <TextInput
                            id="firstName"
                            type="text"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="lastName"
                                value="Last Name"
                            />
                        </div>
                        <TextInput
                            id="lastName"
                            type="text"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="name@flowbite.com"
                            required={true}
                        />
                    </div>
                    <div id="select">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="countries"
                                value="Select your country"
                            />
                        </div>
                        <Select
                            id="countries"
                            required={true}
                        >
                            <option>
                                United States
                            </option>
                            <option>
                                Canada
                            </option>
                            <option>
                                France
                            </option>
                            <option>
                                Germany
                            </option>
                            <option>
                                Bangladesh
                            </option>
                            <option>
                                India
                            </option>
                        </Select>
                    </div>
                    <div id="textarea">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="comment"
                                value="Your message"
                            />
                        </div>
                        <Textarea
                            id="comment"
                            placeholder="Leave a comment..."
                            required={true}
                            rows={4}
                        />
                    </div>
                    <Button type="submit" gradientDuoTone="pinkToOrange">
                        Submit
                    </Button>
                </form>
            </div>
            <div className='mx-10'>
                <h2 className='text-3xl mb-5'>Our Office</h2>
                <div className='w-full'>
                    <div className="flex">
                    <FaLocationArrow className='text-orange-500 mt-2 mr-3'></FaLocationArrow>
                    <p className='text-xl pb-5'> Edmonton City, Alberta, Canada</p>
                    </div>
                    <div className="flex">
                    <FaEnvelope
                    className='text-orange-500 mt-2 mr-3'></FaEnvelope>
                    <p className='text-xl pb-5'> getvisa@gmail.com</p>
                    </div>
                    <div className="flex">
                    <FaPhoneAlt
                    className='text-orange-500 mt-2 mr-3'></FaPhoneAlt>
                    <p className='text-xl pb-5'> +234567898765</p>
                    </div>
                    <div className="flex">
                    <FaCalendarAlt
                    className='text-orange-500 mt-2 mr-3'></FaCalendarAlt>
                    <div>
                        <p className='text-xl'> Opening hours</p>
                        <p className='text-xl'> 9 am - 5 pm</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;