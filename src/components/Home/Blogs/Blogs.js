import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = () => {
    const [blogInfo, setBlogInfo] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 10;

    useEffect(() => {
        fetch(`https://holidays-hype.herokuapp.com/blogs?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setBlogInfo(data.result)
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            })
    }, [page])
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
                    <div className='pagination'>
                        {
                            [...Array(pageCount).keys()].map(number =>
                                <button
                                    className={number === page ? 'selected' : ''}
                                    key={number}
                                    onClick={() => setPage(number)}
                                > {number + 1}</button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;