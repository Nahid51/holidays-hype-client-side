import React from 'react';
import Locations from '../Locations/Locations';
import Reviews from '../Reviews/Reviews';

const ReviewsLocations = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-md-8 col-12'>
                    <Reviews />
                </div>
                <div className='col-md-4 col-12'>
                    <Locations />
                </div>
            </div>
        </div>
    );
};

export default ReviewsLocations;