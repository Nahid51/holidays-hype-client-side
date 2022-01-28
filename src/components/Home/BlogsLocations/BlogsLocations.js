import React from 'react';
import { Container } from 'react-bootstrap';
import Blogs from '../Blogs/Blogs';
import Locations from '../Locations/Locations';

const BlogsLocations = () => {
    return (
        <div>
            <Container>
                <div className='row'>
                    <div className='col-md-8 col-12'>
                        <Blogs />
                    </div>
                    <div className='col-md-4 col-12'>
                        <Locations />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BlogsLocations;