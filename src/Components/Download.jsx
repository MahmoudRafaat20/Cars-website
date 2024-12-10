import React from 'react';
import android from "../assets/images/landing-page/andriod.png"
import ios from "../assets/images/landing-page/ios.png"
import iphone from "../assets/images/landing-page/sec-7/iphone-14.png"
const Download = () => {
    return (
        <div  >
            <div className='row'>
                <div className='col d-flex flex-column align-items-center'>
                    <div>
                        <h3>Download Rentcars App<h3 className='text-primary'> FOR FREE</h3></h3>
                        <small>For faster, easier booking and exclusive deals.</small>
                    </div>
                    <div className='d-flex p-2'>
                        <img src={android} className='mx-2'/>
                        <img src={ios} />
                    </div>
                    <form className='download w-75 d-flex flex-column '>
                        <input placeholder='Name ' className=' my-1 p-2'/>
                        <input placeholder='Phone Number' className='my-1 p-2'/>
                        <input placeholder='Email' className=' my-1 p-2'/>
                    </form>
                     <button className='btn btn-primary text-start my-2 px-5'>Send</button>
                </div>
                <div className='col text-center iphone '>
                    <img src={iphone} width={400} />
                </div>
            </div>
        </div>
    );
};

export default Download;