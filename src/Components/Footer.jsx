import React from 'react';
import footerlogo from "../assets/footer/logo-footer.png"
import location from "../assets/footer/location.png"
import call from "../assets/footer/call.png"
import sms from "../assets/footer/sms.png"
import facebook from "../assets/footer/facebook.png"
import instagram from "../assets/footer/instagram.png"
import youtube from "../assets/footer/youtube.png"
const Footer = () => {
    return (
        <div className='text-center footer text-light '>
            <div className="row  ">
                <div className="col-md-4">
                    <div className='p-5 text-start'>
                        <img src={footerlogo} className='my-2'/>
                        <div className='d-flex align-items-center py-1'>
                            <img src={location} className='me-2' />
                            <small>25566 Hc 1, Glenallen,
                                Alaska, 99588, USA</small>
                        </div>
                        <div>
                            <img src={call} className='my-2 py-1' />
                            <small>+603 4784 273 12</small>
                        </div>
                        <div>
                            <img src={sms} className='me-2' />
                            <small>rentcars@gmail.com</small>
                        </div>
                    </div>
                </div>
                <div className="col text-start">
                    <div className="p-5 d-flex flex-column">
                        <p><b>Our products</b></p>
                        <small>Career</small>
                        <small>Car</small>
                        <small>Packages</small>
                        <small>Features</small>
                        <small>Priceline</small>
                    </div>
                </div>
                <div className="col text-start">
                    <div className="p-5 d-flex flex-column">
                        <p><b>Resources</b></p>
                        <small>Download</small>
                        <small>Help Centre</small>
                        <small>Guides</small>
                        <small>Partner Network</small>
                        <small>Cruises</small>
                        <small>Developer</small>
                    </div>
                </div>
                <div className="col text-start">
                    <div className="p-5 d-flex flex-column">
                        <p><b>About Rentcars</b></p>
                        <small>Why Choose us</small>
                        <small>Our story</small>
                        <small>Investor Relations</small>
                        <small>Press Canter</small>
                        <small>Advertise</small>
                    </div>
                </div>
                <div className="social col text-start">
                    <div className="p-5">
                        <p><b>Follow Us</b></p>
                        <div className='d-flex' >
                            <img src={facebook} className='me-2' />
                            <img src={instagram} className='me-2' />
                            <img src={youtube} />
                        </div>
                    </div>
                </div>
                <hr />
                <p >Copyright 2023 ・ Rentcars, All Rights Reserved</p>
            </div>

        </div>
    );
};

export default Footer;