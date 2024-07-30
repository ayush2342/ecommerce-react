import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, editProduct } from '../actions/productActions';
import EditProduct from './EditProduct';

const ProductItem = ({ product }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
  };

  const handleEdit = (updatedProduct) => {
    dispatch(editProduct(updatedProduct));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <EditProduct product={product} onSave={handleEdit} onCancel={() => setIsEditing(false)} />
      ) : (
        <div>
          <h2>{product.name}</h2>
          <p>Rs {product.price}</p>
          <p>{product.description}</p>
          <p>Rating: {product.rating}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
