import React, { useEffect, useState } from 'react';
import MyItem from '../MyItem/MyItem';
import './MyItems.css';

const MyItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])



    return (
        <div id="items" className='container'>
        <div className="row">
        <h1 className='text-primary text-center mt-5'> Our All items</h1>

            <div className='items-container'>
                {
                    items.map(item => <MyItem
                        key={item._id}
                        item={item}
                    ></MyItem>)
                }
            </div>
        </div>
    </div>
    );
};

export default MyItems;