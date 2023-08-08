import React from "react";
import { useCart } from "react-use-cart";

const Itemcard = (props) => {
  const { addItem } = useCart();
  return (
    <div className="col-12 col-md-4 col-lg-4 mx-0 mb-3">
      <div className="card p-0  overflow-hidden h-100 rounded-top-3 border-0 shadow-lg ">
        <img
          src={props.img}
          className="card-img-top img-fluid h-100 object-lg-cover"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-title"> ${props.price}</h5>
          <p className="card-text">{props.desc}</p>
          <button
            className="btn btn-success"
            onClick={() => addItem(props.item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
