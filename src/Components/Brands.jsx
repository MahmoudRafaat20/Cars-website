import React from 'react';
import audi from "../assets/images/landing-page/audi.png"
import nissan from "../assets/images/landing-page/nissan.png"
import volvo from "../assets/images/landing-page/volvo.png"
import jaguar from "../assets/images/landing-page/jaguar.png"
const Brands = () => {
    return (
        <div className='brands text-center'>
            <div className="row">
                <div className="col"><img src={audi}/></div>
                <div className="col"><img src={jaguar}/></div>
                <div className="col"><img src={volvo}/></div>
                <div className="col "><img src={nissan}/></div>
            </div>
        </div>
    );
};

export default Brands;