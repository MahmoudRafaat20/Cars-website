import React from 'react';
import Header from '../Header';
import Deals from '../Deals';
import Popular from '../Popular';
import Brands from '../Brands';
import Experiences from '../Experiences';
import Rates from '../Rates';
import Download from '../Download';
import Footer from '../Footer';
import Cars from '../Cars';
import { Outlet } from 'react-router-dom';
import Details from '../Details';

const Home = () => {
    return (
        <>
            <Header/>
            <Deals/>
            <Popular/>
            <Brands/>
            <Experiences/>
            <Rates/>
            <Download/>
            <Footer/>
          
        </>
    );
};

export default Home;