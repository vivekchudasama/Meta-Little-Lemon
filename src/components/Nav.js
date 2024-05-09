import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./icons_assets/logo_lemon.webp";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useBasket } from "./basketContext";

export default function App() {
  const { basket } = useBasket();
  const [basketItemCount, setBasketItemCount] = useState(0);

  useEffect(() => {
    setBasketItemCount(
      basket.reduce((count, item) => count + item.quantity, 0)
    );
  }, [basket]);

  return (
    <div className="d-flex mt-2 mb-2 bg---highlight-light justify-content-center">
      <div className="row mx-0 col-12 col-md-11">
        <Navbar
          className="text-warning align-items-center"
          bg="--highlight-light"
          expand="md"
        >
          <Container
            fluid
            className="d-flex justify-content-between align-items-center "
          >
            <a href="/" className="logo">
              <img src={Logo} width={190} alt="logo Little Lemon" />
            </a>
            <Link className="basket d-md-none" to="/basket">
              <div className="position-relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-bag-check"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>
                {basketItemCount > 0 && (
                  <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {basketItemCount}
                    <span className="visually-hidden">unread messages</span>
                  </div>
                )}
              </div>
            </Link>
            <Navbar.Toggle className="text-light" aria-controls="" />
            <Navbar.Collapse id="navbar-light-example" style={{ flexGrow: 0 }}>
              <Nav className="d-flex align-items-end navbar-nav ml-lg-auto navlist">
                <Link to="/">
                  <h5 className="mt-3 py-md-0 ">Home</h5>
                </Link>
                <Link to="/#about">
                  <h5 className=" py-md-0 ">About</h5>
                </Link>
                <Link to="/#specials">
                  <h5 className="py-md-0 ">Specials</h5>
                </Link>
                <Link to="/errorpage">
                  <h5 className="py-md-0 ">Menu</h5>
                </Link>
                <Link to="/login">
                  <h5 className="py-md-0 ">Login</h5>
                </Link>
              </Nav>
            </Navbar.Collapse>
            <Link className="basket d-none d-md-flex" to="/basket">
              <div className="position-relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-bag-check"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>
                {basketItemCount > 0 && (
                  <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {basketItemCount}
                    <span className="visually-hidden">unread messages</span>
                  </div>
                )}
              </div>
            </Link>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
