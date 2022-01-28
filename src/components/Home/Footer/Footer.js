import React from 'react';
import { Button, Card, Col, Container, Form, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id='contact'>
            <Card style={{ backgroundColor: "#28293e" }} className="text-light mt-5 border-0 rounded-0">
                <Card.Body className='row d-flex justify-content-between align-items-center'>
                    <div className="col-12 col-md-4 p-5">
                        <Navbar.Brand className="lh-2 fw-bold fs-3">Holidays Hype<br /><small className="fs-6 color1">Explore the World!</small></Navbar.Brand>
                        <Card.Text style={{ fontWeight: "300" }}>
                            We Offer You A Greate World Tour.
                        </Card.Text>
                    </div>
                    <div className="col-12 col-md-4 p-3">
                        <Card.Text className='fs-4 text-center'>Give me your feedback</Card.Text>
                        <Form>
                            <Row xs={1} md={2}>
                                <Col>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control
                                            style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                            type="text"
                                            placeholder="Full Name"
                                            required />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control
                                            style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                            type="email"
                                            placeholder="Email address"
                                            required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row xs={1} md={2}>
                                <Col>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control
                                            style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                            type="number"
                                            placeholder="Phone Number"
                                            required />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control
                                            style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                            type="text"
                                            placeholder="Your Address"
                                            required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control
                                    style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                    as="textarea"
                                    placeholder='Your Message'
                                    rows={3}
                                    required />
                            </Form.Group>
                            <Button type='submit' className='btn-grad'>Send</Button>
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
        </div>
    );
};

export default Footer;