import React from 'react';
import audi from "../assets/images/landing-page/sec-5/Audi 1.png"
import user from "../assets/images/landing-page/sec-5/user.png"
import chat from "../assets/images/landing-page/sec-5/chat.png"
import message from "../assets/images/landing-page/sec-5/message.png"
const Experiences = () => {
    return (
        <div className='experiences'>
            <div className='row d-flex align-items-center '>
                <div className='car col'>
                    <img src={audi}  />
                </div>
                <div className='col py-5 px-5 '>
                    <div className='text-center align-items-center'>
                        <button className='rate-button text-primary btn btn-primary'>Why choose us</button>
                        <h4 className='p-3'>We offer the best experience with our rental deals</h4>
                    </div>
                    <div className='d-flex p-3 align-items-center'>
                        <img src={user} />
                        <div className='px-3 '>
                            <h6>Best price guaranteed </h6>
                            <p>Find a lower price? We'll refund you 100% of the difference.</p>
                        </div>
                    </div>
                    <div className='d-flex p-3 align-items-center'>
                        <img src={chat} />
                        <div className='px-3'>
                            <h6>24/7 technical support </h6>
                            <p>Have a question? Contact Rentcars support any time when you have problem.</p>
                        </div>
                    </div>
                    <div className='d-flex p-3 align-items-center'>
                        <img src={user} />
                        <div className='px-3'>
                            <h6>Best price guaranteed </h6>
                            <p>Find a lower price? We’ll refund you 100% of the difference.</p>
                        </div>
                    </div>
                    <div className='d-flex p-3 align-items-center'>
                        <img src={message} />
                        <div className='px-3'>
                            <h6>24 hour car delivery</h6>
                            <p>Book your car anytime and we will deliver it directly to you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;