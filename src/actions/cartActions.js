// export const addToCart = (product) => ({
//     type: 'ADD_TO_CART',
//     payload: product,
//   });
  
//   export const removeFromCart = (id) => ({
//     type: 'REMOVE_FROM_CART',
//     payload: id,
//   });
  

export const addToCart = (product) => (dispatch, getState) => {
  const { cart } = getState().cart;

  // Check if the product is already in the cart
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    // Dispatch an action to update the quantity of the existing product
    dispatch({
      type: 'UPDATE_CART_ITEM',
      payload: {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      },
    });
  } else {
    // Dispatch an action to add a new product to the cart
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity: 1 },
    });
  }
};

export const removeFromCart = (id) => ({
  type: 'REMOVE_FROM_CART',
  payload: id,
});
