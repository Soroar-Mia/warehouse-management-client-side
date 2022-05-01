import React, { useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';

const Banner = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='container'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/KFLY2Zh/banner1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>WELCOME TO</h3>
            <h3>FRESH FRUITS WAREHOUSE</h3>
            <Button variant="outline-success">INVENTORIES</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/FHXDp5q/banner2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>WELCOME TO</h3>
            <h3>FRESH FRUITS WAREHOUSE</h3>
            <Button variant="outline-success">INVENTORIES</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/GH2LTv3/banner3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>WELCOME TO</h3>
            <h3>FRESH FRUITS WAREHOUSE</h3>
            <Button variant="outline-success">INVENTORIES</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;