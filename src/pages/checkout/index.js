import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckOutPage from "../../components/checkout";

const Checkout = () => {
  const selector = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(selector);
  }, []);
  const total=selector.reduce((initial,current)=>initial+current.quantity*current.price,0)
  console.log(total)
  // const total= selector.reduce((initial,current)=>selector.quantity)
  return (
    <div>
      {selector.map((cloth) => (
        <CheckOutPage key={cloth.id} cloth={cloth} />
      ))}
      <h3>Price={total}</h3>
      {/* {
        setTotal=selector.reduce((intial,current)=>
        (
          intial.quantity+current.quantity*current.price
        ),0
        )
      } */}
  
    </div>
  );
};

export default Checkout;
