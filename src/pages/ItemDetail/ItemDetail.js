import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [update, setUpdate] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [itemId, update])

    const handleDelivered = () => {
        const newQuantity = parseInt(item.quantity) - 1;
        fetch(`http://localhost:5000/item?itemId=${itemId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({newQuantity})
        })
        .then(res => res.json())
        .then(data => setUpdate(data))
    }

    const handleRestock = (event) => {
        event.preventDefault();
        const userQuantity = event.target.number.value;
        const newQuantity = parseInt(item.quantity) + parseInt(userQuantity);
        fetch(`http://localhost:5000/item?itemId=${itemId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({newQuantity})
        })
        .then(res => res.json())
        .then(data => {
            setUpdate(data);
            event.target.reset();
        })
    }


    return (
        <div className="container px-4">
            <div className='row gx-5 p-3 '>
                <div className='col-sm-6 item qqq bg-light'>
                    <img className='w-100 hei' src={item.img} alt="" />
                    <h3>Name :{item.name}</h3>
                    <h3>Supplier Name :{item.supplier}</h3>
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p><small>{item.description}</small></p>
                    <button onClick={handleDelivered} className='btn btn-info'>Delivered</button>
                </div>
                <div className='col-sm-6 '>
                    <div className='w-100 bac formdetail mx-auto'>
                        <h2 className='text-info text-center p-2'>RESTOCK</h2>
                        <form onSubmit={handleRestock} className='d-flex flex-column   p-5'>
                            <input className='mb-2 addI' name='number' placeholder='Item Quantity' type="number" />
                            <input className='bg-info w-100 d-block mx-auto addI' type="Submit" value="Restock the Items" />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ItemDetail;