import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularManu from '../Popular Menu/PopularManu';
import Featured from '../Featured/Featured';
import TestiMonials from '../TestiMonials/TestiMonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularManu></PopularManu>
            <Featured></Featured>
            <TestiMonials></TestiMonials>
        </div>
    );
};

export default Home;