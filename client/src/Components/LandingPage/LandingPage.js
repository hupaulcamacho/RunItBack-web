import React from 'react'
import video from './background.mp4';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className='landing-main'>\
            <div className='landing-info'>
                <h1 className='landing-title'>Run It Back</h1>
                <div className='landing-blurb'>
                    Create your own professional fgc esports profile and compete in tournaments!!
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