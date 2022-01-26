import React, { useState } from 'react';
import { Alert, Button, Card, Container, Form, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../Home/Navigation/Navigation';
import login from '../../images/login.jpg';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, error, googleSignIn } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginButton = (e) => {
        e.preventDefault();
        loginUser(loginData?.email, loginData?.password, location, navigate)
    }

    const handleGoogleSignIn = () => {
        googleSignIn(location, navigate);
    }

    return (
        <div className='text-center'>
            <Navigation />
            <Container style={{ marginTop: "10rem" }}>
                <div className='row'>
                    <Card className='col-12 col-md-6 border-0'>
                        <Card.Img
                            variant="top"
                            src={login}
                            className='w-75 ms-auto'
                        />
                    </Card>
                    <Card style={{ width: '25rem' }} className='col-12 col-md-6'>
                        <Card.Body>
                            <Card.Title className='login-text'>Login Form</Card.Title>
                            {user.email &&
                                <Alert variant='success'>
                                    Login Successfully!
                                </Alert>
                            }
                            {error && <Alert variant='danger'>{error}</Alert>}
                            {isLoading ? <Spinner animation="border" variant="warning" /> :
                                <Form>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Control
                                            onBlur={handleOnBlur}
                                            name="email"
                                            type="email"
                                            placeholder="Enter email"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Control
                                            onBlur={handleOnBlur}
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </Form.Group>
                                    <Button onClick={handleLoginButton} type='submit' className='btn edit-btn'>Login</Button>
                                </Form>}
                            <Card.Text className='mt-3 mb-5'>
                                Don't have an account?<NavLink to="/register">Create an account</NavLink>
                            </Card.Text>
                            Or Login with
                            <Button onClick={handleGoogleSignIn} className='btn btn-danger m-3'>Google</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Container >

        </div >
    );
};

export default Login;