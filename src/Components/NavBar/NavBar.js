import React, { useState } from 'react';
import './NavBar.css';
import {  Link, NavLink } from 'react-router-dom';
import logo from './logo.png';
import { Navbar, Nav, Container,Carousel } from "react-bootstrap";

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
                    </div>
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
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
                </div>
                    {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
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
                </div>

                    {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                </Carousel>


        </nav>
    );
};

export default NavBar;