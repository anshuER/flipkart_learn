import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { additem, deleteitem, removeitems } from "../../redux/cart/cartAction";
import { totalItems } from "../../redux/cart/cartFunctions";

const CheckOutPage = ({ cloth }) => {
  const dispatch = useDispatch();
  const selector=useSelector((state) => state.cart.cartItems);
  console.log(selector)
  
  return (
    <div>
      <div>
        <figure className="figure">
          <img
            src={cloth.image}
            className="img-thumbnail"
            alt="..."
            style={{ height: "300px" }}
          />
          <div
            className="figure-caption text-left"
            style={{ display: "inline-table", paddingLeft: "20px" }}
          >
            <h3>{cloth.title}</h3>
            <h4>{cloth.price}$</h4>
            <div>
              <span
                style={{
                  color: "black",
                  paddingTop: "10px",
                  paddingRight: "20px",
                  fontSize: "24px",
                }}
                className="fas"
              >
                <span onClick={() => dispatch(deleteitem(cloth))}>
                  &#x2212;
                </span>
                <span style={{ paddingLeft: "10px" }}>{cloth.quantity}</span>
                <span
                  onClick={() => dispatch(additem(cloth))}
                  style={{ paddingLeft: "10px" }}
                >
                  &#x2b;
                </span>
              </span>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginTop: "10px" }}
              onClick={() => dispatch(removeitems(cloth))}
            >
              Remove item
            </button>
          </div>
        </figure>
      </div>
      <h2>
        ----------------------------------------------------------------------------------------------------------------------
      </h2>
      {/* <label>total={total}</label> */}
    </div>
  );
};

export default CheckOutPage;
