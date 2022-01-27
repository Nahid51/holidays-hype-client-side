import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
                            <NavLink className='text-light text-decoration-none me-3' to="/">Home</NavLink>
                            <HashLink className='text-light text-decoration-none me-3' to="/home#blogs">Blogs</HashLink>
                            <HashLink className='text-light text-decoration-none me-3' to="/home#reviews">Reviews</HashLink>
                            <NavLink className='text-light text-decoration-none me-3' to="/dashboard">Dashboard</NavLink>
                            <HashLink className='text-light text-decoration-none me-3' to="/home#contact">Contact</HashLink>
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