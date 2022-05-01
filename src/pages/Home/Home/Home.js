import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div className='background'>
            <Banner></Banner>
            <Items></Items>
        </div>
    );
};

export default Home;