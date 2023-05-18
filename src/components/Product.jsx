import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';


const Product = ({ products, category }) => {

    const [prod, setProd] = useState([]);
    
  const cardItem = (item) => {
    return (
      <div className="card my-5 py-4" key={item.id} style={{ width: '18rem' }}>
        <img src={item.image} className="card-img-top" alt={item.title} style={{ height: '50%' }}  />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">${item.price}</p>
          <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">
            Buy Now
          </NavLink>
        </div>
      </div>
    );
  };

  

  const filteredProducts = category ? products.filter((item) => item.category === category) : prod;
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>{category}</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {filteredProducts.map(cardItem)}
        </div>
      </div>
    </div>
  );
};

export default Product;
