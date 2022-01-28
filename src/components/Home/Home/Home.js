import React from 'react';
import Banner from '../Banner/Banner';
import BlogsLocations from '../BlogsLocations/BlogsLocations';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <BlogsLocations />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;