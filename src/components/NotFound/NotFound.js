import React from 'react';
import { Alert, Card } from 'react-bootstrap';
import Navigation from '../Home/Navigation/Navigation';
import img from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <Navigation />
            <Card style={{ marginTop: "5rem" }} className="w-50 mx-auto">
                <Card.Img src={img} alt="Card image" />
                <Card.ImgOverlay className="row">
                </Card.ImgOverlay>
                <Alert variant='warning' className='fw-bold text-center'>Please follow the rules perfectly.</Alert>
            </Card>
        </div>
    );
};

export default NotFound;