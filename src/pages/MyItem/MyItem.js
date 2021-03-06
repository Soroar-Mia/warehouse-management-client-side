import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyItem.css';

const MyItem = ({item}) => {
    const {_id, name, img, supplier,quantity, description, price} = item;
   // console.log(item);
    const navigate = useNavigate();
    const navigateToItemDetail = id =>{
        navigate(`/item/${id}`);
    }

    return (
        <div className='itemss '>
            <img className='w-100' src={img} alt="" />
            <h3>Name :{name}</h3>
            <h3>Supplier Name :{supplier}</h3>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToItemDetail(_id)} className='btn btn-info'>Stock update</button>
        </div>
    );
};

export default MyItem;