import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {

    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data.slice(0, 6)));
    }, [])


    return (
        <div id="items" className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Our items</h1>
  
                <div className='items-container'>
                    {
                        items.map(item => <Item
                            key={item._id}
                            item={item}
                        ></Item>)
                    }
                    
                </div>
                <button onClick={() => navigate('/manageservices')} type="button" class="btn btn-info w-50 mx-auto mt-3 mb-3"><b>MANAGE  INVENTORY</b></button>
            </div>
        </div>
    );
};

export default Items;