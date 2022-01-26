import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';
import banner4 from '../../../images/banner4.jpg';
import banner5 from '../../../images/banner5.jpg';
import banner6 from '../../../images/banner6.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel className='banner-setup' fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Enjoyable Journey</h3>
                        <p>A enjoyable journey with reasonable fare.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>24 Hours Service</h3>
                        <p>We provide 24 hours service with honesty.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Journey With Fun</h3>
                        <p>We also provide many interesting game materials.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Enjoyable Journey</h3>
                        <p>A enjoyable journey with reasonable fare.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner5}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>24 Hours Service</h3>
                        <p>We Provide 24 hours Service With Honesty.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner6}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Journey With Fun</h3>
                        <p>We also provide many interesting game materials.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;