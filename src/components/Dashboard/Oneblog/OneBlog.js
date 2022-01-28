import React, { useEffect, useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const OneBlog = () => {
    const { isLoading } = useAuth();
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    console.log(blog);
    const [success, setSuccess] = useState(false);

    const newDate = new Date().toLocaleString();

    useEffect(() => {
        fetch(`http://localhost:5000/updateBlog/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [id]);
    const handleUpdateName = e => {
        const location = e.target.value;
        const updatePd = { location: location, photo: blog?.photo, price: blog?.price, description: blog?.description, date: blog?.date, rating: blog?.rating };
        setBlog(updatePd)
    }
    const handleUpdateImg = e => {
        const updatePhoto = e.target.value;
        const updatePd = { location: blog?.location, photo: updatePhoto, price: blog?.price, description: blog?.description, date: blog?.date, rating: blog?.rating };
        setBlog(updatePd)
    }
    const handleUpdatePrice = e => {
        const updatePrice = e.target.value;
        const updatePd = { location: blog?.location, photo: blog?.photo, price: updatePrice, description: blog?.description, date: blog?.date, rating: blog?.rating };
        setBlog(updatePd)
    }
    const handleUpdateAbout = e => {
        const updateDescription = e.target.value;
        const updatePd = { location: blog?.location, photo: blog?.photo, price: blog?.price, description: updateDescription, date: blog?.date, rating: blog?.rating };
        setBlog(updatePd)
    }
    const handleUpdateRating = e => {
        const updateRating = e.target.value;
        const updatePd = { location: blog?.location, photo: blog?.photo, price: blog?.price, description: blog?.description, date: blog?.date, rating: updateRating };
        setBlog(updatePd)
    }
    const handleUpdateDate = e => {
        const updateDate = e.target.value;
        const updatePd = { location: blog?.location, photo: blog?.photo, price: blog?.price, description: blog?.description, date: updateDate, rating: blog?.rating };
        setBlog(updatePd)
    }
    const handleButton = e => {
        e.preventDefault();
        fetch(`http://localhost:5000/updateBlog/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setSuccess(true);
                    console.log(data)
                }
            })
    }
    return (
        <div>
            <div className='mx-auto'>
                <div className='w-75 mx-auto'>
                    <h4 className='mb-3'>Update Blog</h4>
                    {isLoading ? <Spinner animation="border" variant="warning" /> :
                        <Form className='border p-5 rounded'>
                            {success && <Alert variant='success'>Blog Update successfully!</Alert>}
                            <div className='row'>
                                <Form.Group className="col-12 col-md-6 mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control
                                        style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                        onBlur={handleUpdateName}
                                        name='location'
                                        type="text"
                                        placeholder="Enter Blog Title"
                                    />
                                </Form.Group>
                                <Form.Group className="col-12 col-md-6 mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control
                                        style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                        onBlur={handleUpdatePrice}
                                        name='price'
                                        type="number"
                                        placeholder="Enter Price"
                                    />
                                </Form.Group>
                            </div>
                            <div className='row'>
                                <Form.Group className="col-12 col-md-6 mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control
                                        style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                        onBlur={handleUpdateDate}
                                        name='date'
                                        defaultValue={newDate}
                                        readOnly
                                    />
                                </Form.Group>
                                <Form.Group className="col-12 col-md-6 mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control
                                        style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                        onBlur={handleUpdateImg}
                                        name='photo'
                                        type='url'
                                        placeholder='Enter Image URL'
                                    />
                                </Form.Group>
                            </div>
                            <div className='row'>
                                <Form.Group className="col-6 mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control
                                        style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                        onBlur={handleUpdateAbout}
                                        name='description'
                                        as="textarea"
                                        placeholder='Enter Description'
                                        rows={3}
                                    />
                                </Form.Group>
                                <Form.Group className="col-12 col-md-6 mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control
                                        style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                        onBlur={handleUpdateRating}
                                        name='rating'
                                        type="number"
                                        placeholder="Enter Rating Point. ex. 5 or 4"
                                    />
                                </Form.Group>
                            </div>
                            <Button onClick={handleButton} className='btn edit-btn'>Submit</Button>
                            <Button type='reset' className='btn edit-btn ms-1'>Reset</Button>
                        </Form>}
                    <Alert variant="warning">*Please click on each input section and submit information carefully.</Alert>
                </div>
            </div>
        </div>
    );
};

export default OneBlog;