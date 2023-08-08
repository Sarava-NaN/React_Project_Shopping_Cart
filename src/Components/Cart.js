import React from "react";
import { useCart } from "react-use-cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shipping from "./Shipping";

const Cart = () => {
  <BrowserRouter>
    <Routes>
      <Route expect path="/Shipping" element={<Shipping />} />
    </Routes>
  </BrowserRouter>;

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">Your cart is Empty</h1>;
  return (
    <section className="py-4 container media">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Cart({totalUniqueItems}) total items:({totalItems})
          </h5>
          <table className="table table-dark table-responsive-sm table-responsive-lg table-responsive-md table-hover m-0 mediaquery">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index} className="tr">
                    <td>
                      <img
                        src={item.img}
                        style={{
                          height: "6rem",
                          minHeight: "fit-content",
                          width: "80%",
                          minWidth: "fit-contain",
                          margin: ".2rem",
                          border: "none",
                          outline: "none",
                          objectFit: "cover",
                          borderRadius: "18px",
                          background: "none",
                        }}
                        className="col-1 col-md-6 col-lg-10 col-sm-10 img"
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>
                      <span className="hidden">Quantity</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        style={{
                          width: "2rem",
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                      ({item.quantity})
                    </td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() => {
                          updateItemQuantity(item.id, item.quantity - 1);
                        }}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() => {
                          updateItemQuantity(item.id, item.quantity + 1);
                        }}
                      >
                        +
                      </button>
                      <button
                        className=" new btn btn-danger ms-2 col-12 col-md-6 col-lg-6 col-sm-6 m-2 "
                        onClick={() => {
                          removeItem(item.id);
                        }}
                      >
                        Remove Item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="ms-auto mt-3 col-md-4">
          <h2>TOTAL PRICE={`$${cartTotal}`}</h2>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-danger m-2"
            onClick={() => {
              emptyCart();
            }}
          >
            Clear Cart
          </button>
          <a
            href="http://localhost:3000/shipping"
            target="_blank"
            className="decore"
          >
            <button className="btn btn-success m-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: "1.5rem", margin: ".2rem" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              CheckOut
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cart;
