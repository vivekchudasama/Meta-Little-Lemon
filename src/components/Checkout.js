import React, { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <section id="checkput">
      <div className="container mt-5">
        <h2 className="text-center mb-4">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Shipping Details
            </label>
            <textarea
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="cardNumber" className="form-label">
              Card Number
            </label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="expiryDate" className="form-label">
                Expiry Date
              </label>
              <input
                type="text"
                className="form-control"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="cvv" className="form-label">
                CVV
              </label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Place Order
          </button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
