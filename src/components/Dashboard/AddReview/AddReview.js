import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const AddReview = () => {
    const [reviewData, setReviewData] = useState({});
    const [success, setSuccess] = useState(false);
    const { error, isLoading } = useAuth();

    const postDate = new Date().toLocaleString();

    const handleAddReview = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...reviewData };
        newReviewData[field] = value;
        setReviewData(newReviewData);
    }
    const handleButton = e => {
        e.preventDefault();
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSuccess(true);
            })
    }
    return (
        <div className='mx-auto'>
            <div className='w-75 mx-auto'>
                <h4 className='mb-3'>Add Review</h4>
                {error && <Alert variant='danger'>{error}</Alert>}
                {isLoading ? <Spinner animation="border" variant="warning" /> :
                    <Form className='border p-5 rounded'>
                        {success && <Alert variant='success'>Review added successfully!</Alert>}
                        <div className='row mb-3'>
                            <Form.Group className="col-12 col-md-6" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                    onBlur={handleAddReview}
                                    name='name'
                                    type="text"
                                    placeholder="Enter Your Name"
                                />
                            </Form.Group>
                            <Form.Group className="col-12 col-md-6" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                    onBlur={handleAddReview}
                                    name='photo'
                                    type="url"
                                    placeholder="Enter Your Image URL"
                                />
                            </Form.Group>
                        </div>
                        <div className='row mb-3'>
                            <Form.Group className="col-12 col-md-6" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                    onBlur={handleAddReview}
                                    name='date'
                                    defaultValue={postDate}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group className="col-12 col-md-6" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                    onBlur={handleAddReview}
                                    name='rating'
                                    type="number"
                                    placeholder="Enter Rating Point. ex. 5 or 4"
                                />
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                                style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                onBlur={handleAddReview}
                                name='description'
                                as="textarea"
                                placeholder='Enter Description'
                                rows={3}
                            />
                        </Form.Group>
                        <Button onClick={handleButton} className='btn btn-grad'>Submit</Button>
                        <Button type='reset' className='btn btn-grad ms-1'>Reset</Button>
                    </Form>}
                <Alert variant="warning">*Please click on each input section and submit information carefully.</Alert>
            </div>
        </div>
    );
};

export default AddReview;