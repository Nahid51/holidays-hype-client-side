import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import ReviewsLocations from '../ReviewsLocations/ReviewsLocations';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <ReviewsLocations />
            <Footer />
        </div>
    );
};

export default Home;