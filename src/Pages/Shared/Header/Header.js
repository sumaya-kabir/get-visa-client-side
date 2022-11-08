import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import logo from '../../../assets/logo/logo (1).png';

const Header = () => {
    return (
        <div>
            <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/">
    <img
      src={logo}
      className="h-9 sm:h-9"
      alt="Get Visa Logo"
    />
    <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
      GET VISA
    </span>
  </Navbar.Brand>
  
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
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