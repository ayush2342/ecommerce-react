import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaPlus } from 'react-icons/fa';

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cart.length);

  return (
    <nav>
      <Link to="/">eCommerce</Link>
      <Link to="/">Products</Link>
      <Link to="/add-product">Add a product <FaPlus /></Link>
      <Link to="/cart">Cart ({cartCount})</Link>
    </nav>
  );
};

export default Navbar;
