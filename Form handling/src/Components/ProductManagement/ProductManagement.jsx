
import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {

    const [products, setProducts] = useState([]);

    const handleAddNewProduct = newProduct =>{
        const newProducts = [...products, newProduct];
        setProducts(newProducts);
    }
    return (
        <div>
            <h3>Add a Product</h3>
            <ProductForm handleAddNewProduct={handleAddNewProduct}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;