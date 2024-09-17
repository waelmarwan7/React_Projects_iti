import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../component/Nav';

const Layout = () => {
    return (
       <div>
            <Outlet/>
            <Nav></Nav>
       
       </div>
    );
}

export default Layout;
