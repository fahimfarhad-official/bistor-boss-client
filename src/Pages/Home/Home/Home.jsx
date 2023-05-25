import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularManu from '../Popular Menu/PopularManu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularManu></PopularManu>
        </div>
    );
};

export default Home;