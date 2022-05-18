import React from 'react'
import video from './background.mp4';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className='landing-main'>\
            <div className='landing-info'>
                <h1 className='landing-title'>RunItBack</h1>
                <div className='landing-blurb'>
                    Create your own professional esports profile!
                </div>
            </div>
            <div>video</div>
            <div className='video-wrapper'> 
                <video className='background-video' autoPlay muted loop id="myVideo">
                    <source src={video}type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default LandingPage;