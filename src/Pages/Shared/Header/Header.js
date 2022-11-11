import React, { useContext } from 'react';
import { Button, Navbar } from 'flowbite-react';
import logo from '../../../assets/logo/logo (1).png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogout = () =>{
    logOut()
    .then()
    .catch(error => console.log(error))
}

    return (
        <div>
            <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/">
    <img
      src={logo}
      alt="Get Visa Logo"
    />
    <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
      GET VISA
    </span>
  </Navbar.Brand>
  
  <Navbar.Collapse>
    <Navbar className='hover:bg-orange-300 rounded-lg'>
      <Link to='/'>Home</Link>
    </Navbar>
    <Navbar className='hover:bg-orange-300 rounded-lg'>
    <Link to='/about'>About</Link>
    </Navbar>
    <Navbar className='hover:bg-orange-300 rounded-lg'>
    <Link to='/services'>Services</Link>
    </Navbar>
    <Navbar className='hover:bg-orange-300 rounded-lg'>
    <Link to='/blog'>Blog</Link>
    </Navbar>
    {
      user?.uid ? 
      <>
        <Navbar className='hover:bg-orange-300 rounded-lg'>
        <Link to='/addservices'>Add Services</Link>
        </Navbar>
        <Navbar className='hover:bg-orange-300 rounded-lg'>
        <Link to='/myReviews'>My Reviews</Link>
        </Navbar>
        <Navbar className='hover:bg-orange-300 rounded-lg'>
        <Link onClick={handleLogout}>Logout</Link>
        </Navbar>
      </>
      :
      <Navbar className='hover:bg-orange-300 rounded-lg'>
      <Link to='/login'>Login</Link>
      </Navbar>
    }
    <Navbar className='hover:bg-orange-300 rounded-lg'>
    <Link to='/contact'>Contact</Link>
    </Navbar>
  </Navbar.Collapse>
  <div className="flex md:order-2">
    <Button gradientDuoTone="pinkToOrange">
      Get Appointment
    </Button>
    <Navbar.Toggle />
  </div>
</Navbar>
        </div>
    );
};

export default Header;