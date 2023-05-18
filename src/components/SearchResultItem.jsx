import React from 'react';
import { NavLink } from 'react-router-dom';

const SearchResultItem = ({ product }) => {
  return (
    <li style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
      <h3>{product.title}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <NavLink to={`/products/${product.id}`} className="btn btn-primary">
                  Buy Now
                </NavLink>
    </li>
  );
};

export default SearchResultItem;
