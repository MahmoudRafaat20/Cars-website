import React from 'react';
import car1 from "../assets/images/landing-page/car1.png"
import car2 from "../assets/images/landing-page/car2.png"
import car3 from "../assets/images/landing-page/car3.png"
import star from "../assets/card/star.png"
import frame from "../assets/card/frame.png"
import user from "../assets/card/user.png"
import air from "../assets/card/d8wxke_2_.png"
import doors from "../assets/card/doors.png"
import arrow from "../assets/card/arrow-right.png"
import { Link } from 'react-router-dom';
const Deals = () => {
    return (
        <div className='deals m-1'>
            <div className="input-group text-center p-5" >
                <i className="fa-solid fa-location-dot input-group-text"></i>
                <input type="text" className="form-control " placeholder="Search by name" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
            </div>
            <div className=' deal p-2 text-center'>
                <div>
                    <button className=' rate-button btn btn-outline-primary'>Popular rental Deals</button>
                    <h1 className='py-3' >Most popular cars rental deals </h1>
                </div>
                <div className="cars row px-2 d-flex ">
                <div className="col-3 ">
                        <div className="card shadow ">
                            <img src={car1} height={180}/>
                            <div className="card-body text-start ">
                                <h5 className="card-title">BMW M3</h5>
                                <img src={star} /><span className='px-1'>4.5<span className='opacity-50'> (2436 reviews)</span></span>
                                <div className=' row d-flex opacity-50'>
                                    <div className='col'>
                                        <img src={user} /><span>4 passengers</span><br />
                                        <img src={air} /><span>Air conditioning</span>
                                    </div>
                                    <div className='col  '>
                                        <img src={frame} /><span>Auto</span><br />
                                        <img src={doors} /><span>4 Doors</span>
                                    </div>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <small>Price</small>
                                    <p><b>$1600</b>/day</p>
                                </div>
                                <Link className='btn btn-primary w-100 my-2' to="/details" >Rent now<img src={arrow} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 ">
                        <div className="card shadow">
                            <img src={car2} height={180} className='w-100'/>
                            <div className="card-body text-start ">
                                <h5 class="card-title">Audi r8</h5>
                                <img src={star} /><span className='px-1'>4.6<span className='opacity-50'> (2436 reviews)</span></span>
                                <div className=' row d-flex opacity-50'>
                                    <div className='col'>
                                        <img src={user} /><span>2 passengers</span><br />
                                        <img src={air} /><span>Air conditioning</span>
                                    </div>
                                    <div className='col  '>
                                        <img src={frame} /><span>Auto</span><br />
                                        <img src={doors} /><span>4 Doors</span>
                                    </div>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <small>Price</small>
                                    <p><b>$2100</b>/day</p>
                                </div>
                                <Link className='btn btn-primary w-100 my-2' to="/details" >Rent now<img src={arrow} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 ">
                        <div className="card shadow ">
                            <img src={car3}  className='jaguar-photo'/>
                            <div className="card-body text-start p-3">
                                <h5 className="card-title">JAGUAR XE L P250</h5>
                                <img src={star} /><span className='px-1'>4.8<span className='opacity-50'> (2436 reviews)</span></span>
                                <div className=' row d-flex opacity-50'>
                                    <div className='col'>
                                        <img src={user} /><span>3 passengers</span><br />
                                        <img src={air} /><span>Air conditioning</span>
                                    </div>
                                    <div className='col  '>
                                        <img src={frame} /><span>Auto</span><br />
                                        <img src={doors} /><span>4 Doors</span>
                                    </div>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <small>Price</small>
                                    <p><b>$1800</b>/day</p>
                                </div>
                                <Link className='btn btn-primary w-100 my-2' to="/details" >Rent now<img src={arrow} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 ">
                        <div className="card shadow">
                            <img src={car2} height={180}/>
                            <div className="card-body text-start ">
                                <h5 className="card-title">Audi r8</h5>
                                <img src={star} /><span className='px-1'>4.8<span className='opacity-50'> (2436 reviews)</span></span>
                                <div className=' row d-flex opacity-50'>
                                    <div className='col'>
                                        <img src={user} /><span>2 passengers</span><br />
                                        <img src={air} /><span>Air conditioning</span>
                                    </div>
                                    <div className='col  '>
                                        <img src={frame} /><span>Auto</span><br />
                                        <img src={doors} /><span>4 Doors</span>
                                    </div>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <small>Price</small>
                                    <p><b>$2100</b>/day</p>
                                </div>
                                <Link className='btn btn-primary w-100 my-2' to="/details" >Rent now<img src={arrow} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Link  className="show-button btn btn-transparent btn-outline-secondary m-5 px-5" to="/cars">Show more vihecles<i className="px-2 fas fa-long-arrow-alt-right"></i></Link>
            </div>
        </div>
    );
};

export default Deals;