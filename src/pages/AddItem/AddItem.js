import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://sleepy-mountain-44464.herokuapp.com/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
        })
    };
    return (
        <div className='w-100 bac  mx-auto'>
            <h2 className='text-info text-center p-2'>ADD INVENTORY</h2>
            <form className='d-flex flex-column addItem p-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 addI' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2 addI' placeholder='Supplier Name' {...register("supplier")} />
                <input className='mb-2 addI' placeholder='Image URL' {...register("img")} />
                <textarea className='mb-2 addI' placeholder='Description' {...register("description")} />
                <input className='mb-2 addI' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2 addI' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2 addI' placeholder='Sold' type="number" {...register("sold")} />
                <input className='bg-info w-50 d-block mx-auto addI' type="Submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;