import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === parseInt(id))
  );
  const dispatch = useDispatch();

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Rs {product.price}</p>
      <p>{product.description}</p>
      <p>Rating: {product.rating}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
