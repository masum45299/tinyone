import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Features.css';
import features1 from './features1.png';
import features2 from './features2.png';
import features3 from './features3.png';
import features4 from './features4.png';
import features5 from './features5.png';
import features6 from './features6.png';
import Section from '../Section/Section';

const Features = () => {
    return (
        <div>
            <div className='container mb-5'>
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-10 mt-5 mb-5'>
                <div className='text-center'>
                    <h1>Tinyone features</h1>
                    <p style={{padding:"0px 40px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
                </div>
                </div>
                <div className='col-md-1'></div>
            </div>
            
            <div className='row'>
                <div className='col-md-4 features-flex'>
                <img className='features-icon' src={features1} alt=''></img>
                <div className='features-info'>
                    <h4>Fully Responsive</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                </div>
                </div>
                <div className='col-md-4 features-flex'>
                <img className='features-icon' src={features2} alt=''></img>
                <div className='features-info'>
                    <h4>Fully Responsive</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                </div>
                </div>
                <div className='col-md-4 features-flex'>
                <img className='features-icon' src={features3} alt=''></img>
                <div className='features-info'>
                    <h4>Fully Responsive</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                </div>
                </div>
                <div className='col-md-4 features-flex'>
                <img className='features-icon' src={features4} alt=''></img>
                <div className='features-info'>
                    <h4>Fully Responsive</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                </div>
                </div>
                <div className='col-md-4 features-flex'>
                <img className='features-icon' src={features5} alt=''></img>
                <div className='features-info'>
                    <h4>Fully Responsive</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                </div>
                </div>
                <div className='col-md-4 features-flex'>
                <img className='features-icon' src={features6} alt=''></img>
                <div className='features-info'>
                    <h4>Fully Responsive</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                </div>
                </div>
            </div>
        </div>
        <Section></Section>
        </div>
    );
};

export default Features;