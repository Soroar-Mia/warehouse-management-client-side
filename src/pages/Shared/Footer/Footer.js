import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='color-f text-center App-heade'>
            <p><small >copyright &copy; {(new Date().getFullYear())}</small></p>
            <h3 >For more information, please contact:</h3>
            <h5 >Gmail:miasoroar@gmail.come</h5>
        </footer>
    );
};

export default Footer;