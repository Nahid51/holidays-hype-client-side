import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Home/Navigation/Navigation';

const SingleBlog = () => {
    const { blogId } = useParams();
    const [blogInfo, setBlogInfo] = useState([]);
    const [singleBlog, setSingleBlog] = useState([]);
    const rating = Number(singleBlog?.rating);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogInfo(data))
    }, []);
    useEffect(() => {
        const foundBlog = blogInfo.find(blog => blog._id === blogId);
        console.log(foundBlog);
        setSingleBlog(foundBlog);
    }, [blogId, blogInfo]);
    return (
        <div>
            <Navigation />
            <div className="card mb-3 w-75 mx-auto" style={{ marginTop: "5rem" }}>
                <img src={singleBlog?.photo} className="card-img-top" alt="BlogPhoto" />
                <div className="card-body">
                    <h2 className="card-title fw-bold">{singleBlog?.location}</h2>
                    <div className='row my-3'>
                        <h5 className="col-6">Posted on {singleBlog?.date}</h5>
                        <h5 className="col-6">Expense: &#36;{singleBlog?.price}/person</h5>
                    </div>
                    <p className="card-text">About: {singleBlog?.description}</p>
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >
                        <Rating name="read-only" value={rating} readOnly />
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;