import React, { useState } from 'react';
import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import { Alert, Button, Card, Col } from 'react-bootstrap';
import './AllBlog.css'
import { NavLink } from 'react-router-dom';

const AllBlogs = ({ blogs }) => {
    const { _id, photo, price, date, location, description, rating } = blogs;
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const ratingStar = Number(rating);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this blog?')
        if (proceed) {
            fetch(`http://localhost:5000/deleteBlog/${_id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setSuccess(true);
                        setIsLoading(true);
                        console.log(data);
                    }
                })
        }
    }
    return (
        <div>
            <Col>
                {success && <Alert variant="success">Delete Successfully!</Alert>}
                {!isLoading &&
                    <Card>
                        <Card.Img variant="top" src={photo} />
                        <Card.Body>
                            <Card.Title className='fw-bold'>{location}</Card.Title>
                            <div className='row my-3'>
                                <h6 className='col-6'>Expense: &#36;{price}/person</h6>
                                <h6 className='col-6'>Posted on {date}</h6>
                            </div>
                            <Card.Text className='blog-card' style={{ textAlign: "justify" }}>Description: {description}</Card.Text>
                            <Box
                                sx={{
                                    '& > legend': { mt: 2 },
                                }}
                            >
                                <Rating name="half-rating-read" value={ratingStar} precision={0.5} readOnly />
                            </Box>
                        </Card.Body>
                        <div className='button-setup'>
                            <NavLink to={`/dashboard/oneBlog/${_id}`}>
                                <Button className='btn btn-info'>Update</Button>
                            </NavLink>
                            <Button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</Button>
                        </div>
                    </Card>}
            </Col>
        </div>
    );
};

export default AllBlogs;