import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import ReviewsLocations from '../ReviewsLocations/ReviewsLocations';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <ReviewsLocations />
        </div>
    );
};

export default Home;