import React from 'react';
import './AnimatePage.css'
const AnimatedPage = () => {
    return (
        <div>
            <h1 className='text-7xl'>This is an animated page</h1>

            <div className='card' data-aos="fade-up">
                <h2>one component</h2>
            </div>

            <div className='card' data-aos="fade-down">
                <h2>one component</h2>
            </div>

            <div className='card' data-aos="fade-right">
                <h2>one component</h2>
            </div>

            <div className='card' data-aos="fade-left">
                <h2>one component</h2>
            </div>
            <div className='card' data-aos="fade-up-right">
                <h2>one component</h2>
            </div>

            <div className='card' data-aos="fade-up-left">
                <h2>one component</h2>
            </div>

            <div className='card' data-aos="fade-down-left">
                <h2>one component</h2>
            </div>
            <div className='card' data-aos="flip-left">
                <h2>one component</h2>
            </div>
            <div className='card' data-aos="flip-right">
                <h2>one component</h2>
            </div>

            <div className='card' data-aos="flip-down">
                <h2>one component</h2>
            </div>

            <div className='card' data-aos="zoom-in-up">
                <h2>one component</h2>
            </div>
            <div className='card' data-aos="zoom-in-left">
                <h2>one component</h2>
            </div>

            <div className='card' data-aos="zoom-in-right">
                <h2>one component</h2>
            </div>

            <div className='card' data-aos="zoom-out-right">
                <h2>one component</h2>
            </div>
            <div className='card' data-aos="zoom-out-left">
                <h2>one component</h2>
            </div>
            <div className='card' data-aos="fade-up"
                data-aos-duration="3000">
                <h2>one component</h2>
            </div>

            <div className='card' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <h2>one component</h2>
            </div>

            <div className='card' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <h2>one component</h2>
            </div>

        </div>
    );
};

export default AnimatedPage;

