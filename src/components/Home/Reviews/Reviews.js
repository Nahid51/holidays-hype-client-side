import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from './Review';

const Reviews = () => {
    const [reviewInfo, setReviewInfo] = useState([]);

    useEffect(() => {
        fetch('https://holidays-hype.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviewInfo(data))
    }, [])
    return (
        <div id='reviews'>
            <Container className='mt-5'>
                <div className='text-center'>
                    <h3 className='fw-bold'>Travelers' <span style={{ color: "#7AB259" }}>Experiences</span></h3>
                    <div className='mt-3 mb-3'>
                        <Row xs={1} md={4} className="g-4">
                            {reviewInfo?.map((review) => (
                                <Review
                                    key={review._id}
                                    review={review}
                                ></Review>
                            ))}
                        </Row>
                    </div>
                </div>
            </Container>
        </div >
    );
};

export default Reviews;