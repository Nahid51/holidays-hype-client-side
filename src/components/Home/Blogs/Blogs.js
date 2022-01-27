import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Blog from './Blog';

const Blogs = () => {
    const [blogInfo, setBlogInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogInfo(data))
    }, [])
    return (
        <div>
            <div className='mt-5 text-center'>
                <h3 className='fw-bold'>Our <span style={{ color: "#7AB259" }}>Blogs</span></h3>
                <div className='mt-3 mb-3'>
                    <Row xs={1} md={3} className="g-4">
                        {blogInfo?.map((blog) => (
                            <Blog
                                key={blog._id}
                                blog={blog}
                            ></Blog>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Blogs;