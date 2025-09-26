import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <h3>Products: {products.length}</h3>

            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <tr key={index}>
                            <th>{index+1}</th>
                            <th>{product.name}</th>
                            <th>{product.quantity}</th>
                            <th>{product.price}</th>
                            <th></th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;