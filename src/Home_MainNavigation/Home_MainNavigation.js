import React from 'react'
import { Outlet } from 'react-router-dom';
import'./HomeMainNavigation.css';

import Header from './Header';
import Footer from './Footer';

const Home_mainNavigation = () => {
  return (
    <>
    
    
    <Header/>
    <Outlet/>
    <Footer/>
    
    
    </>
  )
}

export default Home_mainNavigation;