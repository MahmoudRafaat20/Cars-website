import React from 'react';
import audi from "../assets/images/landing-page/sec-5/Audi 1.png"
import user from "../assets/card/user.png"

import air from "../assets/card/d8wxke_2_.png"
import frame from "../assets/card/frame.png"
import doors from "../assets/card/doors.png"
const Details = () => {
    return (
        <div className='details'>
                 <div className='row d-flex align-items-center '>
                <div className='car col'>
                    <img src={audi}  />
                </div>
                <div className='col py-5 px-5 '>
                    <div className='text-center align-items-center'>
                        <button className='rate-button text-primary btn btn-primary'>Why choose us</button>
                        <h4 className='p-3'>We offer the best experience with our rental deals</h4>
                    </div>
                     <div>
                     <div className=' row d-flex flex-column opacity-50'>
                                    <div className='col '>
                                        <img src={user} /><span>4 passengers</span><br/>
                                        <img src={air} /><span>Air conditioning</span>
                                    </div>
                                    <div className='col  '>
                                        <img src={frame} /><span>Auto</span><br/>
                                        <img src={doors} /><span>4 Doors</span>
                                    </div>
                                </div>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Details;