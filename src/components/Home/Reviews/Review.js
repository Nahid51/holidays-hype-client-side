import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Review.css';

const Review = ({ review }) => {
    const { photo, name, description, date, rating } = review;
    const ratingStar = Number(rating);
    return (
        <div>
            <Col>
                <Card className='card-style'>
                    <Card.Body>
                        <Card.Title className='row align-items-center'>
                            <Card className='col-3 border-0'>
                                <Card.Img style={{ height: '80px', width: '80px' }} className='rounded-circle' variant="top" src={photo} />
                            </Card>
                            <Card className='col-9 border-0 bg-transparent'>
                                <Card.Title className='fw-bold'>{name}</Card.Title>
                            </Card>
                        </Card.Title>
                        <Card.Text className='feedback-card text-secondary'>{description}</Card.Text>
                        <Card.Title className='row align-items-center'>
                            <Card className='col-6 border-0'>
                                <Box
                                    sx={{
                                        '& > legend': { mt: 2 },
                                    }}
                                >
                                    <Rating name="half-rating-read" value={ratingStar} precision={0.5} readOnly />
                                </Box>
                            </Card>
                            <Card className='col-6 border-0'>
                                <Card.Text className='fs-6'>{date}</Card.Text>
                            </Card>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Review;