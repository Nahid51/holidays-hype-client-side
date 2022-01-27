import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const AddBlog = () => {
    const [blogData, setBlogData] = useState({});
    const [success, setSuccess] = useState(false);
    const { error, isLoading } = useAuth();

    const postDate = new Date().toLocaleString();
    console.log(blogData);

    const handleAddBlog = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBlogData = { ...blogData };
        newBlogData[field] = value;
        setBlogData(newBlogData);
    }
    const handleButton = e => {
        e.preventDefault();
        fetch('https://holidays-hype.herokuapp.com/addBlogs', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(blogData)
        })
            .then(res => res.json())
            .then(data => {
                setSuccess(true);
            })
    }
    return (
        <div className='mx-auto'>
            <div className='w-75 mx-auto'>
                <h4 className='mb-3'>Add Blog</h4>
                {error && <Alert variant='danger'>{error}</Alert>}
                {isLoading ? <Spinner animation="border" variant="warning" /> :
                    <Form className='border p-5 rounded'>
                        {success && <Alert variant='success'>Blog added successfully!</Alert>}
                        <div className='row'>
                            <Form.Group className="col-12 col-md-6 mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                    onBlur={handleAddBlog}
                                    name='location'
                                    type="text"
                                    placeholder="Enter Blog Title"
                                />
                            </Form.Group>
                            <Form.Group className="col-12 col-md-6 mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                    onBlur={handleAddBlog}
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
                                    onBlur={handleAddBlog}
                                    name='date'
                                    defaultValue={postDate}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group className="col-12 col-md-6 mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control
                                    style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                    onBlur={handleAddBlog}
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
                                    onBlur={handleAddBlog}
                                    name='description'
                                    as="textarea"
                                    placeholder='Enter Description'
                                    rows={3}
                                />
                            </Form.Group>
                            <Form.Group className="col-12 col-md-6 mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                    onBlur={handleAddBlog}
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
    );
};

export default AddBlog;