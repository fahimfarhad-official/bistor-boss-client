import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularManu from '../Popular Menu/PopularManu';
import Featured from '../Featured/Featured';
import TestiMonials from '../TestiMonials/TestiMonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularManu></PopularManu>
            <Featured></Featured>
            <TestiMonials></TestiMonials>
        </div>
    );
};

export default Home;