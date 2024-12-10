import React from 'react';
import logo from "../assets/nav/logo.png"
import car from "../assets/images/landing-page/car 2 1.png"
const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <img src={logo} />
                    <button
                        className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav justify-content-center " id="navbarSupportedContent">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <button className='btn btn-transparent'>Become a renter</button>
                            </li>
                            <li className="nav-item">
                                <button className='btn btn-transparent'>How it works</button>
                            </li>
                            <li className="nav-item">
                                <button className='btn btn-transparent'>Rental deals</button>
                            </li>
                            <li className="nav-item">
                                <button className='btn btn-transparent'>Why choose us</button>
                            </li>
                        </ul>
                        <div className=' px-1 mx-2'>
                            <button className='btn btn-transparent border mx-3'>Sign in</button>
                            <button className='btn btn-primary border mx-3'>Sign up</button>
                        </div>
                    </div>

                </div>
            </nav>
            <div className=" row d-flex align-items-center">
            
                <div className="article col text-center ">
                    <h1>Find, book and<br/>rent a car <span className='text-primary'>Easily</span></h1>
                    <p>Get a car wherever and whenever you need it with your IOS and Android device.</p>
                </div>
                <div className="car col text-end">
                    <img src={car} />
                </div>
            </div>
        </div>
    );
};

export default Header;