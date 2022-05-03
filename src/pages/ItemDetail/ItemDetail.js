import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [])
    return (
        <div class="container px-4">
            <div className='row gx-5 p-3 '>
                <h2> you are about to :{item.name}</h2>
                <div className='col-6 item qqq bg-light'>
                    <img className='w-100 hei' src={item.img} alt="" />
                    <h3>Name :{item.name}</h3>
                    <h3>Supplier Name :{item.supplier}</h3>
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p><small>{item.description}</small></p>
                    <button className='btn btn-info'>Delivered</button>
                </div>
                <div className='col-6'>
                <div className='w-100 bac  mx-auto'>
            <h2 className='text-info text-center p-2'>ADD INVENTORY</h2>
            <form className='d-flex flex-column  p-5'>
                <input className='mb-2 addI' placeholder='Price' type="number" />
                <input className='bg-info w-100 d-block mx-auto addI' type="Submit" value="Add Item" />
            </form>
        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;