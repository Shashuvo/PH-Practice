import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;