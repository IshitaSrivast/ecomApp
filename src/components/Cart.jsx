import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";
import { NavLink } from "react-router-dom";
import Product from "./Product";

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();
  
  //dispatching if the cross button is clicked
  const handleClose = (item) => {
    dispatch(delItem(item));
  };
  
  //dispatch when the plus button is pressed in cart to increase the quantity
  const handleCartPlus = (product) => {
    dispatch(addItem(product));
  };

  //dispatch when the minus button is pressed in cart to decrease the quantity
  const handleCartMinus = (product) => {
    dispatch(delItem(product));
  };

  //when the cart not empty
  const cartItems = (cartItem) => {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
          <div className="container py-4">
            <button
              onClick={() => handleClose(cartItem)}
              className="btn-close float-end"
              aria-label="Close"
            ></button>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={cartItem.image}
                  alt={cartItem.title}
                  height="200px"
                  width="180px"
                />
                
              </div>
              <div className="col-md-4">
                <h3>{cartItem.title}</h3>
                <p className="lead fw-bold">${cartItem.price}</p>
                <p className="lead fw-bold">
                  Quantity: {cartItem.qty} <br></br>
                  Total Price: ${cartItem.qty * cartItem.price}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleCartMinus(cartItem)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleCartPlus(cartItem)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // when the cart is empty
  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };


  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-primary mb-5 w-25 mx-auto"
          >
            Proceed To checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
