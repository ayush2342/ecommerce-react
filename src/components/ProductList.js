import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, sortProductsByPrice, clearSort } from '../actions/productActions';
import ProductItem from './ProductItem';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSort = () => {
    dispatch(sortProductsByPrice());
  };

  const handleClearSort = () => {
    dispatch(clearSort(products));
  };

  return (
    <div style={{backgroundColor:'#E5E5E5'}}>
      <button onClick={handleSort}>Sort by price</button>
      <button onClick={handleClearSort}>X</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;


