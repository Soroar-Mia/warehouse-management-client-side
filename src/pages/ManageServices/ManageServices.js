import React from 'react';
import useItems from '../../hooks/useItems';

const ManageServices = () => {
    const [items, setItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }

    return (
        <div className='bg-secondary text-light'>
            <div className='w-50 mx-auto bac container'>
                <h2 className='text-primary text-center  mb-3'>Manage your Items</h2>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <b>Name</b>
                        </div>
                        <div class="col">
                            <b>Quantity</b>
                        </div>
                        <div class="col">
                            <b>Price</b>
                        </div>
                        <div class="col">
                            <b>Action</b>
                        </div>
                    </div>
                </div>
                {
                    items.map(item => <div key={item._id}>
                        <div class="container by-3 pt-3">
                            <div class="row">
                                <div class="col">
                                    {item.name}
                                </div>
                                <div class="col">
                                    {item.quantity}
                                </div>
                                <div class="col">
                                    {item.price}
                                </div>
                                <div class="col">
                                    <button type="button" class="btn btn-danger" onClick={() => handleDelete(item._id)}><b>x</b></button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageServices;