import React from 'react';
import Header from '../Header';
import Deals from '../Deals';
import Popular from '../Popular';
import Brands from '../Brands';
import Experiences from '../Experiences';
import Rates from '../Rates';
import Download from '../Download';
import Footer from '../Footer';


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