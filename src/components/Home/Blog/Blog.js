import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Blog.css';

const Blog = ({ blog }) => {
    const { _id, location, photo } = blog;
    return (
        <div>
            <Col>
                <Card className='hovereffect border-0'>
                    <Card.Img className='projectPhoto' variant="top" src={photo} alt='ProjectPhoto' />
                    <Card.Body className='overlay'>
                        <Card.Title className='ProjectTitle'>{location}</Card.Title>
                        <NavLink to={`/singleBlog/${_id}`} className='ProjectDetail'>Details</NavLink>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Blog;