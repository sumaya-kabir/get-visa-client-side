import React from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    useTitle('SignUp')
    return (
        <div className=' py-10'>
            <h2 className='text-4xl text-center'>Sign Up Here</h2>
            <form className="mx-12 md:mx-auto md:w-1/2 flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        type="email"
                        placeholder="name@getvisa.com"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="repeat-password"
                            value="Repeat password"
                        />
                    </div>
                    <TextInput
                        id="repeat-password"
                        type="password"
                        required={true}
                        shadow={true}
                    />
                </div>
                
                <Button gradientDuoTone="pinkToOrange" type="submit">
                    Sign Up
                </Button>
                <Button color='light'>
                    <FaGoogle className='mr-2'></FaGoogle>Google
                </Button>
            </form>
            <p className='text-center'>Already have an account? <Link className='text-orange-400' to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUp;