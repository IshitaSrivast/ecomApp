import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';
import LoadingSpinner from './Loading';

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState('Add to Cart');
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === 'Add to Cart') {
      dispatch(addItem(product));
      setCartBtn('Remove from Cart');
    } else {
      dispatch(delItem(product));
      setCartBtn('Add to Cart');
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="container my-5 py-3">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product" style={{ width: '400px', height: '400px' }}>
              <img src={product.image} alt={product.title} style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1 className="display-5 fw-bold">{product.title}</h1>
              <hr />
              <h2 className="my-4">${product.price}</h2>
              <p className="lead">{product.description}</p>

              <button onClick={() => handleCart(product)} className="btn btn-outline-primary my-5">
                {cartBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;

