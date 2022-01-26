import React from 'react';
import { Card, Container, Form, ListGroup, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <Card style={{ backgroundColor: "#28293e" }} className="text-light mt-5 border-0 rounded-0">
                <Card.Body className='row d-flex justify-content-between align-items-center'>
                    <div className="col-12 col-md-4 p-5">
                        <Navbar.Brand className="lh-2 fw-bold fs-3">Holidays Hype<br /><small className="fs-6 color1">Explore the World!</small></Navbar.Brand>
                        <Card.Text style={{ fontWeight: "300" }}>
                            We Offer You A Greate World Tour.
                        </Card.Text>
                    </div>
                    <div className="col-12 col-md-4">
                        <Form className="text-center mb-2 fs-4">Working Hour</Form>
                        <Form>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Monday to Friday: 9am - 5pm</ListGroup.Item>
                                    <ListGroup.Item>Saturday: 9am - 1pm</ListGroup.Item>
                                    <ListGroup.Item>Sunday: Closed</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Form>
                    </div>
                    <div className="col-12 col-md-4 p-5">
                        <Card.Text><small className="fs-4">Contact Us</small><br />
                            Phone: 0151017**** <br /> Email: codder94@gmail.com <br /> Locatoion: Panthapath, Dhaka, Bangladesh
                        </Card.Text>
                        <Container className="text-start">
                            <Link to="/" className="far fa-envelope fa-lg text-light"></Link>
                            <Link to="/" className="fab fa-facebook-square fa-lg mx-3 text-light"></Link>
                            <Link to="/" className="fab fa-whatsapp fa-lg text-light"></Link>
                            <Link to="/" className="fab fa-twitter fa-lg mx-3 text-light"></Link>
                            <Link to="/" className="fab fa-youtube fa-lg text-light"></Link>
                        </Container>
                    </div>
                </Card.Body>
                <small className="text-center">&copy;2022 by Holidays Hype. Proudly created by myself.</small>
            </Card>
        </>
    );
};

export default Footer;