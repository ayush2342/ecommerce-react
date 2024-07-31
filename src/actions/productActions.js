import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });
  try {
    const response = await axios.get('https://my-json-server.typicode.com/ayush2342/dataRepo/products');
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error.message });
  }
};

export const addProduct = (product) => ({
  type: 'ADD_PRODUCT',
  payload: product,
});

export const editProduct = (product) => ({
  type: 'EDIT_PRODUCT',
  payload: product,
});

export const deleteProduct = (id) => ({
  type: 'DELETE_PRODUCT',
  payload: id,
});

export const sortProductsByPrice = () => ({
  type: 'SORT_PRODUCTS_BY_PRICE',
});

export const clearSort = (products) => ({
  type: 'CLEAR_SORT',
  payload: products,
});
