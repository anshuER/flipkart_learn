import React from "react";
import { useDispatch } from "react-redux";
import { additem } from "../../redux/cart/cartAction";

const Card = ({ cloth }) => {
  console.log('what card is getting',cloth)
  const dispatch=useDispatch();
  console.log('selector',dispatch)
  return (
    <div className="col">
      <div className="card h-100" style={{height:'300px' }}>
        <img src={cloth.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{cloth.title}</h5>
          <p className="card-text">{cloth.description}</p>
          <h5 className="card-title">{cloth.price}$</h5>
          <button type="button" className="btn btn-primary" onClick={()=>dispatch(additem(cloth))} >
            Add to cart
          </button>
        </div>
        <div className="card-footer">
          <small className="text-muted">{cloth.rating.rate}/{cloth.rating.count}</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
