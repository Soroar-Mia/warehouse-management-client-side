import React, { useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className=''>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block hhh w-100"
            src="https://i.ibb.co/kGP7rq6/aaasss-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className='aaa'>WELCOME TO</h2>
            <h2 className='ccc'>FRESH FRUITS WAREHOUSE</h2>
            <Button variant="outline-success">INVENTORIES</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block hhh w-100"
            src="https://i.ibb.co/jGRb72v/aaaazzzzz-1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className='ddd' >WELCOME TO</h3>
            <h3 className='ddd'>FRESH FRUITS WAREHOUSE</h3>
            <Button variant="outline-success">INVENTORIES</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block hhh w-100"
            src="https://i.ibb.co/hdSK9Xv/aass-1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className='bbb'>WELCOME TO</h3>
            <h3 className='bbb'>FRESH FRUITS WAREHOUSE</h3>
            <Button variant="outline-success">INVENTORIES</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;