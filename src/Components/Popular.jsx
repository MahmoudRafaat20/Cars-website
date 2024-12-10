import React from 'react';

import icon from "../assets/images/landing-page/car-icon.png"
import location from "../assets/images/landing-page/location.png"
const Popular = () => {
    return (
        <div className='popular'>
            <div className='d-flex justify-content-center'>
                <button className='rate-button text-center border btn btn-outline-primary' >How it works</button>
            </div>
            <div className='text-center py-5'>
                <h1>Most popular cars rental deals</h1>
            </div>
            <div className="container text-center d-flex justify-content-center">
                <div className="popular row p-2 d-flex">
                    <div className="col">
                        <img src={location}/>
                        <h5>Choose location</h5>
                        <small>Choose your and find your best car</small>
                    </div>
                    <div className="col">
                        <img src={icon}/>
                        <h5>Pick-up date</h5>
                        <small>Select your pick up date and time to book your car</small>
                    </div>
                    <div className="col">
                        <img src={location}/>
                        <h5>Book your car</h5>
                        <small>Book your car and we will deliver it directly to you</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;