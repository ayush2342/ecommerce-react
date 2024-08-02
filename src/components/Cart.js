// // // import React from 'react';
// // // import { useSelector, useDispatch } from 'react-redux';
// // // import { removeFromCart } from '../actions/cartActions';

// // // const Cart = () => {
// // //   const cart = useSelector((state) => state.cart.cart);
// // //   const dispatch = useDispatch();

// // //   const handleRemoveFromCart = (id) => {
// // //     dispatch(removeFromCart(id));
// // //   };

// // //   return (
// // //     <div style={{backgroundColor:'#E5E5E5'}}>
// // //       <h2>Cart</h2>
// // //       {cart.length === 0 ? (
// // //         <p>No items in cart</p>
// // //       ) : (
// // //         cart.map((item) => (
// // //           <div key={item.id}>
// // //             <h3>{item.name}</h3>
// // //             <p>Rs {item.price}</p>
// // //             <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
// // //           </div>
// // //         ))
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Cart;

// // import React from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { removeFromCart } from '../actions/cartActions';

// // const Cart = () => {
// //   const cart = useSelector((state) => state.cart.cart);
// //   const dispatch = useDispatch();

// //   const handleRemoveFromCart = (id) => {
// //     dispatch(removeFromCart(id));
// //   };

// //   return (
// //     <div style={{ backgroundColor: '#E5E5E5', padding: '1rem' }}>
// //       <h2>Cart</h2>
// //       {cart.length === 0 ? (
// //         <p>No items in cart</p>
// //       ) : (
// //         cart.map((item) => (
// //           <div key={item.id} className="product-item">
// //             <div className="product-details">
// //               <img src={item.image} alt={item.name} className="product-image" />
// //               <div className="product-info">
// //                 <h3>{item.name}</h3>
// //                 <p>Rs {item.price}</p>
// //                 <p>Quantity: {item.quantity}</p>
// //               </div>
// //             </div>
// //             <div className="product-actions">
// //               <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
// //             </div>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // };

// // export default Cart;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart } from '../actions/cartActions';

// const Cart = () => {
//   const cart = useSelector((state) => state.cart.cart);
//   const dispatch = useDispatch();

//   const handleRemoveFromCart = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   return (
//     <div style={{ backgroundColor: '#E5E5E5', padding: '1rem' }}>
//       <h2>Cart</h2>
//       {cart.length === 0 ? (
//         <p>No items in cart</p>
//       ) : (
//         cart.map((item) => (
//           <div key={item.id} className="product-item">
//             <div className="product-details">
//               <img src={item.image} alt={item.name} className="product-image" />
//               <div className="product-info">
//                 <h2>{item.name}</h2>
//                 <p>Rs {item.price}</p>
//                 <p>{item.description}</p>
//                 <p>Quantity: {item.quantity}</p>
//               </div>
//             </div>
//             <div className="product-actions">
//               <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import '../App.css' ;

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-details">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-info">
                <h2>{item.name}</h2>
                <p>Rs {item.price}</p>
                <p className="cart-description">{item.description}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
            <div className="cart-actions">
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;


