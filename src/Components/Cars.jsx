import axios from 'axios';
import React, { useEffect, useState } from 'react';
import car2 from "../assets/images/landing-page/car2.png"
import car3 from "../assets/images/landing-page/car3.png"

import car1 from "../assets/images/landing-page/car1.png"

import arrow from "../assets/card/arrow-right.png"
import star from "../assets/card/star.png"
import frame from "../assets/card/frame.png"
import user from "../assets/card/user.png"
import air from "../assets/card/d8wxke_2_.png"
import doors from "../assets/card/doors.png"
import { Link } from 'react-router-dom';
const Cars = () => {

    let [cars, setCars] = useState([])
    let getCars = async () => {
        let response = await axios.get("https://myfakeapi.com/api/cars?limit=30");
        setCars(response?.data?.cars.slice(0,10));
    }
    useEffect(() => {
        getCars()
    }, [])
    return (
        <div className='cars  mx-5'>
           <div className="input-group text-center p-5" >
                <i className="fa-solid fa-location-dot input-group-text"></i>
                <input type="text" className="form-control " placeholder="Search by name" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
            </div>
            <div className="row d-flex">
                {cars.map((newCar, index) => (
                    <>
                    <div key={index} className="card my-1  car-cards col-md-3">
                        <img src={car1} className='w-100' />
                        <div className='card-body'></div>
                        <h5 class="card-title">{newCar?.car}</h5>
                        <div>
                        <img src={star}/><span className='px-1'>4.6<span className='opacity-50'> (2436 reviews)</span></span>
                        </div>
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
                                    <p><b>{newCar?.price}</b>/day</p>
                                </div>
                             
                        <Link className='btn btn-primary w-100 my-2' to="/details" >Rent now<img src={arrow} /></Link>
                    </div>
                    <div key={index} className="card my-1  car-cards col-md-3">
                        <img src={car2} className='w-100' />
                        <div className='card-body'></div>
                        <h5 class="card-title">{newCar?.car}</h5>
                        <div>
                        <img src={star}/><span className='px-1'>4.6<span className='opacity-50'> (2436 reviews)</span></span>
                        </div>
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
                                    <p><b>{newCar?.price}</b>/day</p>
                                </div>
                             
                                <Link className='btn btn-primary w-100 my-2' to="/details" >Rent now<img src={arrow} /></Link>
                    </div>
                    <div key={index} className="card my-1  car-cards col-md-3">
                        <img src={car3} className='w-100' />
                        <div className='card-body'></div>
                        <h5 class="card-title">{newCar?.car} {newCar?.car_model}</h5>
                        <div>
                        <img src={star}/><span className='px-1'>4.6<span className='opacity-50'> (2436 reviews)</span></span>
                        </div>
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
                                    <p><b>{newCar?.price}</b>/day</p>
                                </div>
                             
                                <Link className='btn btn-primary w-100 my-2' to="/details" >Rent now<img src={arrow} /></Link>
                    </div>
                    
                    </>
                ))}

            </div>
        </div>
    );
};

export default Cars;