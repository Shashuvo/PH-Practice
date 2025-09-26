import React, { useState } from 'react';

const ProductForm = ({handleAddNewProduct}) => {

    const [error,setError] = useState('');

    const handleProductSubmit = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const price = e.target.price.value;


        // Validation

        if(name.length === 0){
            setError('Please add a product name.');
            return;
        }

        else if(quantity < 1){
            setError('Please add a quantity.');
            return;
        }

        else if(quantity < 0){
            setError("Quantity can't be negative.");
            return;
        }

        else if(price < 1){
            setError('Please add a price.');
            return;
        }

        else if(price < 0){
            setError("price can't be negative.");
            return;
        }

        else{
            setError(" ");
        }
        
        const newProduct ={
            name,
            quantity,
            price
        }

        // console.log(newProduct);
        handleAddNewProduct(newProduct);
    }

    return (
        <div>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" placeholder='Product Name' />
                <br />
                <input type="number" name="quantity" placeholder='Quantity' />
                <br />
                <input type="number" name="price" placeholder='Price' />
                <br />
                <input type="submit" value="Add to Cart" />
            </form>
            <p><small style={{color:'red'}}>{error}</small></p>
        </div>
    );
};

export default ProductForm;