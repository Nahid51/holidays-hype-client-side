import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar fixed='top' className='border-0' style={{ backgroundColor: "#45AAC0" }} expand="lg">
                <Container className='text-light'>
                    <i className="fas fa-suitcase-rolling fa-lg"></i>
                    <Navbar.Brand href="/" className='ms-2 fw-bold text-light'>Holidays Hype</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-light' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto d-flex align-items-center fw-bold">
                            <Nav.Link className='text-light' href="#home">Home</Nav.Link>
                            <Nav.Link className='text-light' href="#about">About</Nav.Link>
                            <Nav.Link className='text-light' href="#reviews">Reviews</Nav.Link>
                            <Nav.Link className='text-light' href="#blogs">Blogs</Nav.Link>
                            <Nav.Link className='text-light' href="#contact">Contact</Nav.Link>
                        </Nav>
                        <Nav.Link className='text-light' href="">Signed in as: {user.displayName}</Nav.Link>
                        {user.email ?
                            <Button onClick={logOut} className='fw-bold btn-grad'>Logout</Button> :
                            <NavLink to='/login'>
                                <Button className='fw-bold btn-grad'>Login</Button>
                            </NavLink>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;