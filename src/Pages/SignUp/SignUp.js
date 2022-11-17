import React, { useContext } from 'react';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    useTitle('SignUp');
    const {createNewUser} = useContext(AuthContext);
    const {googleSignIn} = useContext(AuthContext);
    const {loading} = useContext(AuthContext);


    if(loading) {
        return <div className="text-center">
        <Spinner size="xl" aria-label="Center-aligned spinner example" />
      </div>
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password1.value;

        createNewUser(email, password)
        .then (result => {
            const user = result.user;
            console.log(user)
            // setAuthToken(user)
        })
        .catch(error => {
            console.error(error)
        })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            // setAuthToken(user)

        })
        .catch(err => console.error(err))
    }
    return (
        <div className=' py-10'>
            <h2 className='text-4xl text-center'>Sign Up Here</h2>
            <form onSubmit={handleSubmit} className="mx-12 md:mx-auto md:w-1/2 flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        name="email"
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
                        name="password1"
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
                        name="password2"
                        required={true}
                        shadow={true}
                    />
                </div>
                
                <Button gradientDuoTone="pinkToOrange" type="submit">
                    Sign Up
                </Button>
                <Button onClick={handleGoogleSignIn} color='light'>
                    <FaGoogle className='mr-2'></FaGoogle>Google
                </Button>
            </form>
            <p className='text-center'>Already have an account? <Link className='text-orange-400' to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUp;