import React from 'react';
import girl from "../assets/images/landing-page/sec-6/girl.png"
import rectangle from "../assets/images/landing-page/sec-6/Rectangle 8 (1).png"
import star from "../assets/card/star.png"
const Rates = () => {
    return (
        <div className='py-5'>
        <div className='text-center'>
        <button className='btn rate-button bg-primary text-primary'>Test IMONIALS</button>
           <h2 className='text-center py-4'>Most popular cars rental deals</h2></div>
            <div className="rates cards row text-center d-flex justify-content-around row-cols-1 row-cols-md-3 g-4">
                <div className="col  ">
                    <div className="card shadow">
                        <img src={rectangle} />
                        <div className="card-body">
                            <h5 className="card-title">5.5 <small>stars</small></h5>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <p className="card-text">“I feel very secure when using caretall's services.
                                Your customer care team is very enthusiastic and the driver is always on time.”</p>
                        </div>
                        <div className="card-footer">
                            <p>Charlie Johanson</p>
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card shadow rate ">
                        <img src={girl} className='girl-image '/>
                        <div className="card-body">
                            <h5 className="card-title">5.5 <small>stars</small></h5>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <p className="card-text">“I feel very secure when using caretall's services.
                                Your customer care team is very enthusiastic and the driver is always on time.”</p>
                        </div>
                        <div className="card-footer">
                            <p>Charlie Johanson</p>
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Rates;