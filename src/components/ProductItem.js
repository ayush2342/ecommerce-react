import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, editProduct } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import EditProduct from './EditProduct';
import { FaEdit, FaTrashAlt, FaCartPlus } from 'react-icons/fa';

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

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-item">
      <div className="product-details">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>Rs {product.price}</p>
          <div className="product-rating">
            {Array(product.rating).fill().map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        </div>
        <div className="product-description">
          <p className="description">{product.description}</p>
        </div>
      </div>
      <div className="product-actions">
        {isEditing ? (
          <EditProduct product={product} onSave={handleEdit} onCancel={() => setIsEditing(false)} />
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}><FaEdit /></button>
            <button onClick={handleDelete}><FaTrashAlt /></button>
            <button onClick={handleAddToCart}><FaCartPlus /></button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
