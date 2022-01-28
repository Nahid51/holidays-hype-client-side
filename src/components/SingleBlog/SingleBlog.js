import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Home/Navigation/Navigation';

const SingleBlog = () => {
    const { id } = useParams();
    const [blogDetails, setBlogDetails] = useState([]);
    const [singleBlog, setSingleBlog] = useState([]);
    const rating = Number(singleBlog?.rating);

    // loaded data from database
    useEffect(() => {
        fetch('https://holidays-hype.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogDetails(data.result))
    }, [])

    // compare and find single product
    useEffect(() => {
        const foundBlog = blogDetails?.find(blog => blog?._id === id);
        setSingleBlog(foundBlog);
    }, [id, blogDetails])

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
                        <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;