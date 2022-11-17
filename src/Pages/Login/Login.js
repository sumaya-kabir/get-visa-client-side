import { Button, Checkbox, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    useTitle('Login')
    const {signIn} = useContext(AuthContext);
    const {googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const {loading} = useContext(AuthContext);


    if(loading) {
        return <div className="text-center">
        <Spinner size="xl" aria-label="Center-aligned spinner example" />
      </div>
    }

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;

            const currentUser = {
                email: user.email
            }
            console.log(currentUser);
            //get jwt token from the server side
                fetch('https://getvisa-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },

                    body: JSON.stringify(currentUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    // set token to localstorage
                    localStorage.setItem('getvisa-token', data.token);
                    navigate(from, {replace: true});
                })
            
            
        })
        .catch(err => console.error(err))
    }
    
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
            // setAuthToken(user)

        })
        .catch(err => console.error(err))
    }
    return (
        <div className=' py-10'>
            <h2 className='text-4xl text-center'>Login Here</h2>
            <form onSubmit={handleSubmit} className="mx-12 md:mx-auto md:w-1/2 flex flex-col gap-4">
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
                        name="email"
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
                        name="password"
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
                <Button onClick={handleGoogleSignIn} color='light'>
                    <FaGoogle className='mr-2'></FaGoogle>Google
                </Button>
            </form>
            <p className='text-center'>New to GET VISA? <Link className='text-orange-400' to='/signup'>SignUp</Link></p>
        </div>
    );
};

export default Login;