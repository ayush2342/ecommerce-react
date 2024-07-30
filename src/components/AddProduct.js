import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/productActions';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { id: Date.now(), name, price, description, rating };
    dispatch(addProduct(newProduct));
    setName('');
    setPrice('');
    setDescription('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
