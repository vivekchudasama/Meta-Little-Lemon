import React from "react";
import { Link } from "react-router-dom";
import { useBasket } from "./basketContext";

const Basket = () => {
  const { basket, removeFromBasket, updateQuantity, getTotalPrice } =
    useBasket();

  return (
    <section id="basket" className="container">
      <div className="row  justify-content-center my-5">
        <div className="col-lg-12">
          <h3 className="text-center mb-4">
            <strong>Basket</strong>
          </h3>
          <div className="table-responsive my-3">
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col " style={{ width: "40%" }}>
                    Product
                  </th>
                  <th scope="col" style={{ width: "20%" }}>
                    Price
                  </th>
                  <th scope="col" style={{ width: "20%" }}>
                    Quantity
                  </th>
                  <th scope="col" style={{ width: "20%" }}></th>
                </tr>
              </thead>
              <tbody>
                {basket.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="row align-items-center">
                        <div className="col-md-5  mb-2">
                          <img
                            src={item.url}
                            alt={item.title}
                            className="img-fluid rounded shadow d-md-block d-none"
                            style={{ maxWidth: "80px" }}
                          />
                        </div>
                        <div className="col-md-7">
                          <h5>{item.title}</h5>
                        </div>
                      </div>
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <div className="input-group">
                        <button
                          className="btn btn-outline-secondary p-1"
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          style={{
                            border: "none",
                          }}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="form-control text-center p-0"
                          value={item.quantity}
                          readOnly
                          style={{
                            border: "none",
                          }}
                        />
                        <button
                          className="btn btn-outline-secondary p-1"
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          style={{
                            border: "none",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-remove btn-md"
                        onClick={() => removeFromBasket(item.id)}
                        style={{
                          fontSize: "1.2rem",
                        }}
                      >
                        <i className="bi bi-x-circle"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="float-right text-right">
            <h4>Total:</h4>
            <h2>${getTotalPrice()}</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center my-5">
        <div className="col-sm-6 order-md-2 ">
          <Link to="/checkout" className="btn btn-primary btn-lg pl-5 pr-5">
            Go to Checkout
          </Link>
        </div>
        <div className="col-sm-6 order-md-1 text-md-left mt-4 mb-4">
          <a
            className="text-decoration-none"
            href="/"
            style={{ color: "#495e57" }}
          >
            <i className="fas fa-arrow-left mr-2"></i> <strong>Get back</strong>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Basket;
