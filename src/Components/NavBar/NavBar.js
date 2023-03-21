import React, { useState } from 'react';
import './NavBar.css';
import {  Link, NavLink } from 'react-router-dom';
import logo from './logo.png';
import mobile from './mobile.png';
import { Navbar, Nav, Container,Carousel } from "react-bootstrap";
import { faWindows,faAndroid,faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <nav>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className='yellow'>
                        {/* NavBar */}
                        <Navbar collapseOnSelect expand="lg" variant="dark">
                                <Container>
                                    <Link to={'/features'}><img src={logo} alt=''></img></Link>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse className='justify-end' id="responsive-navbar-nav">

                                    <Nav className='menu'>
                                        <NavLink to={'/features'}>Features</NavLink>
                                        <NavLink to={'/support'}>Support</NavLink>
                                        <NavLink to={'/blog'}>Blog</NavLink>
                                    </Nav>
                                    </Navbar.Collapse>
                                </Container>
                        </Navbar>
                        {/* NavBar end */}
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-6 nav-flex'>
                                    <div>
                                    <h2 className='mb-3'>Inspire your inspiration</h2>
                                    <h5 className='mb-3'>Simple to use for your app, products showcase and your inspiration</h5>
                                    <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit </p>
                                    <div className='fontAwsome'>
                                    <FontAwesomeIcon
                                    className='apple'
                                    icon={faApple}
                                    ></FontAwesomeIcon>
                                    <FontAwesomeIcon
                                    icon={faAndroid}
                                    ></FontAwesomeIcon>
                                    <FontAwesomeIcon
                                    icon={faWindows}
                                    ></FontAwesomeIcon>
                                    </div>
                                    </div>
                                </div>
                                <div className='col-md-6 mobile nav-flex'>
                                    <img  src={mobile} alt=''></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className='orange'>
                            {/* NavBar */}
                            <Navbar collapseOnSelect expand="lg" variant="dark">
                                <Container>
                                    <Link to={'/features'}><img src={logo} alt=''></img></Link>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse className='justify-end' id="responsive-navbar-nav">

                                    <Nav className='menu'>
                                        <NavLink to={'/features'}>Features</NavLink>
                                        <NavLink to={'/support'}>Support</NavLink>
                                        <NavLink to={'/blog'}>Blog</NavLink>
                                    </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        {/* NavBar end */}
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-6 nav-flex'>
                                    <div>
                                    <h2 className='mb-3'>Inspire your inspiration</h2>
                                    <h5 className='mb-3'>Simple to use for your app, products showcase and your inspiration</h5>
                                    <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit </p>
                                    <div className='fontAwsome'>
                                    <FontAwesomeIcon
                                    className='apple'
                                    icon={faApple}
                                    ></FontAwesomeIcon>
                                    <FontAwesomeIcon
                                    icon={faAndroid}
                                    ></FontAwesomeIcon>
                                    <FontAwesomeIcon
                                    icon={faWindows}
                                    ></FontAwesomeIcon>
                                    </div>
                                    </div>
                                </div>
                                <div className='col-md-6 mobile nav-flex'>
                                    <img  src={mobile} alt=''></img>
                                </div>
                            </div>
                        </div>
                </div>

                </Carousel.Item>
                <Carousel.Item>
                <div className='badami'>
                            {/* NavBar */}
                            <Navbar collapseOnSelect expand="lg" variant="dark">
                                <Container>
                                    <Link to={'/features'}><img src={logo} alt=''></img></Link>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse className='justify-end' id="responsive-navbar-nav">

                                    <Nav className='menu'>
                                        <NavLink to={'/features'}>Features</NavLink>
                                        <NavLink to={'/support'}>Support</NavLink>
                                        <NavLink to={'/blog'}>Blog</NavLink>
                                    </Nav>
                                    </Navbar.Collapse>
                                </Container>
                        </Navbar>
                        {/* NavBar end */}
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-6 nav-flex'>
                                    <div>
                                    <h2 className='mb-3'>Inspire your inspiration</h2>
                                    <h5 className='mb-3'>Simple to use for your app, products showcase and your inspiration</h5>
                                    <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit </p>
                                    <div className='fontAwsome'>
                                    <FontAwesomeIcon
                                    className='apple'
                                    icon={faApple}
                                    ></FontAwesomeIcon>
                                    <FontAwesomeIcon
                                    icon={faAndroid}
                                    ></FontAwesomeIcon>
                                    <FontAwesomeIcon
                                    icon={faWindows}
                                    ></FontAwesomeIcon>
                                    </div>
                                    </div>
                                </div>
                                <div className='col-md-6 mobile nav-flex'>
                                    <img  src={mobile} alt=''></img>
                                </div>
                            </div>
                        </div>
                </div>
                </Carousel.Item>
                </Carousel>


        </nav>
    );
};

export default NavBar;