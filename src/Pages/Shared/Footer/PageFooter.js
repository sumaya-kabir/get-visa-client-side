import { Footer } from 'flowbite-react';
import React from 'react';
import logo from '../../../assets/logo/logo (1).png';
import { FaGoogle, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaBehance, FaDribbble } from "react-icons/fa";

const PageFooter = () => {
    return (
        <Footer container={true}>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand
                            href="/"
                            src={logo}
                            alt="Get Visa Logo"
                            name="Get Visa"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Flowbite
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Tailwind CSS
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Github
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Discord
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="#"
                        by="GET VISA™"
                        year={2022}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <FaGoogle className='mr-2'></FaGoogle>
                    <FaFacebook className='mr-2'></FaFacebook>
                    <FaTwitter className='mr-2'></FaTwitter>
                    <FaLinkedin className='mr-2'></FaLinkedin>
                    <FaInstagram className='mr-2'></FaInstagram>
                    <FaBehance className='mr-2'></FaBehance>
                    <FaDribbble className='mr-2'></FaDribbble>
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default PageFooter;