import React from 'react';
import section1 from './section1.png';
import section2 from './section2.png';
import section3 from './section3.png';
import section4 from './section4.png';
import './Section.css';

const Section = () => {
    return (
        <div className='section' style={{background:"black"}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10 mt-5 mb-2'>
                    <div className='text-center'>
                        <h1 style={{color:"yellow"}}>Keep in touch with us</h1>
                        <p style={{color:"#898989",padding:"0px 40px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
                    </div>
                    </div>
                    <div className='col-md-1'></div>
                </div>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10  mb-5'>
                    <div className='input-flex'>
                        <input className='input-btn' type={Text} placeholder="Enter your email to update"></input>
                        <button className='button'>Submit</button>
                    </div>
                    </div>
                    <div className='col-md-1'></div>
                </div>
                <div className='text-center'>
                    <img className='ms-3 mb-5' src={section1} alt=""></img>
                    <img className='ms-3 mb-5' src={section2} alt=""></img>
                    <img className='ms-3 mb-5' src={section3} alt=""></img>
                    <img className='ms-3 mb-5' src={section4} alt=""></img>
                </div>
                <div className='row pb-5'>
                    <div className='col-md-3'>
                        <ul className='list'>
                            <li>HALOVIETNAM LTD</li>
                            <li>66, Dang Van ngu, Dong Da</li>
                            <li>Hanoi, Vietnam</li>
                            <li>contact@halovietnam.com</li>
                            <li>+844 35149182</li>
                        </ul>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-1'>
                        <ul className='list'>
                            <li>Examples</li>
                            <li>Shop</li>
                            <li>License</li>
                        </ul>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-1'>
                        <ul className='list'>
                            <li>Contact</li>
                            <li>About</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-1'>
                        <ul className='list'>
                            <li>Download</li>
                            <li>Support</li>
                            <li>Documents</li>
                        </ul>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-1'>
                        <ul className='list'>
                            <li>Media</li>
                            <li>Blog</li>
                            <li>Forums</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;