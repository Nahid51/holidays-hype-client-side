import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllBlogs from './AllBlogs';

const ManageBlog = () => {
    const [blogsInfo, setBlogsInfo] = useState([]);
    console.log();
    useEffect(() => {
        fetch('http://localhost:5000/allBlogs')
            .then(res => res.json())
            .then(data => setBlogsInfo(data))
    }, [])
    return (
        <div>
            <div className='mx-auto'>
                <div className='w-75 mx-auto'>
                    <h4 className='mb-3'>Booking List</h4>
                    <Row xs={1} md={2} className="g-4">
                        {blogsInfo.map((blogs) => (
                            <AllBlogs
                                key={blogs._id}
                                blogs={blogs}
                            ></AllBlogs>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default ManageBlog;