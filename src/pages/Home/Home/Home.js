import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Abouts from '../Abouts/Abouts';

const Home = () => {
    return (
        <div className='background'>
            <Banner></Banner>
            <Items></Items>
            <Abouts></Abouts>
            <div className='container px-4 py-5 '>
                <h1 className='text-center text-white'>OUR Cheif executive officer</h1>
            <div className='row gx-5 p-3'>
                <div className='col-sm-6'>
                    <img className='img-fluid rounded-3' src="https://personalexcellence.co/files/ceo.jpg" alt="" />
                </div>
                <div className='col-sm-6 item qqq bg-primary text-white'>
                    <h2 className='display-lg-3 fw-bold' >Fresh Fruits CEO</h2>
                    <p>The chief executive officer (CEO) is the top position in an organization and is responsible for implementing existing plans and policies, ensuring the successful management of the business and setting future strategy. The CEO is ultimately responsible for the success or failure of the organization.</p>
                </div>
            </div>
        </div>
    );
        </div>
    );
};

export default Home;