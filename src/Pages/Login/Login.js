import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login')
    return (
        <div className=' py-10'>
            <h2 className='text-4xl text-center'>Login Here</h2>
            <form className="mx-12 md:mx-auto md:w-1/2 flex flex-col gap-4">
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
                        placeholder="name@getvisa.com"
                        required={true}
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
                <div className="flex items-center gap-2">
                    <Checkbox id="forgot" />
                    <Label htmlFor="forgot">
                        Forgot Password
                    </Label>
                </div>
                <Button gradientDuoTone="pinkToOrange" type="submit">
                    Login
                </Button>
                <Button color='light'>
                    <FaGoogle className='mr-2'></FaGoogle>Google
                </Button>
            </form>
            <p className='text-center'>New to GET VISA? <Link className='text-orange-400' to='/signup'>SignUp</Link></p>
        </div>
    );
};

export default Login;