import React from 'react';
import { Outlet } from 'react-router-dom';
import PageFooter from '../Pages/Shared/Footer/PageFooter';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <PageFooter></PageFooter>
            
        </div>
    );
};

export default Main;