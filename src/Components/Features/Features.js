import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Features.css'

const Features = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8 mt-5 mb-5'>
                <div className='text-center'>
                    <h1>Tinyone features</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
                </div>
                </div>
                <div className='col-md-2'></div>
            </div>
            
            <div className='row'>
                <div className='col-md-4 features-flex'>
                <FontAwesomeIcon className='features-icon' icon={faMobile} />
                <div className='features-info'>
                    <h4>Fully Responsive</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                </div>
                </div>
                <div className='col-md-4 features-flex'>
                <FontAwesomeIcon className='features-icon' icon={faMobile} />
                <div className='features-info'>
                    <h4>Fully Responsive</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                </div>
                </div>
                <div className='col-md-4 features-flex'>
                <FontAwesomeIcon className='features-icon' icon={faMobile} />
                <div className='features-info'>
                    <h4>Fully Responsive</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                </div>
                </div>
                <div className='col-md-4 features-flex'>
                <FontAwesomeIcon className='features-icon' icon={faMobile} />
                <div className='features-info'>
                    <h4>Fully Responsive</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                </div>
                </div>
                <div className='col-md-4 features-flex'>
                <FontAwesomeIcon className='features-icon' icon={faMobile} />
                <div className='features-info'>
                    <h4>Fully Responsive</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                </div>
                </div>
                <div className='col-md-4 features-flex'>
                <FontAwesomeIcon className='features-icon' icon={faMobile} />
                <div className='features-info'>
                    <h4>Fully Responsive</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Features;