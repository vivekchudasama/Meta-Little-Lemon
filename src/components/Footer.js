import React from "react-router-dom";
import LogoFooter from "./icons_assets/logo_footer.webp";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <section className="mb-0 mt-0">
        <Row className="align-items-center">
          <Col md={4}>
            <img
              className="img-fluid mx-auto my-4"
              src={LogoFooter}
              alt="Logo Little Lemon Restaurant"
              width={100}
            />
          </Col>
          <Col md={4}>
            <h5 className="my-3">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <i class="bi bi-envelope-at"></i>
                <span>&nbsp;&nbsp;</span>
                info@lemon.com
              </li>
              <li>
                <i class="bi bi-telephone-fill"></i>
                <span>&nbsp;&nbsp;</span> +123 456 789
              </li>
              <li>
                <i class="bi bi-geo-alt"></i>
                <span>&nbsp;&nbsp;</span>5412 W Madison St, Chicago
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="my-3">Social Media</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  className="text-decoration-none"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i class="bi bi-facebook"></i>
                  <span>&nbsp;</span> Facebook
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="text-decoration-none"
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i class="bi bi-twitter-x"></i>
                  <span>&nbsp;</span> Twitter
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i class="bi bi-instagram"></i>
                  <span>&nbsp;</span> Instagram
                </a>
              </li>
            </ul>
          </Col>
          <p className="text-center mt-2">
            {" "}
            <a
              className="text-decoration-none"
              href="https://github.com/vivekchudasama/"
              target="_blank"
              rel="noreferrer"
            >
              Build by Vivek Chudasama
            </a>
          </p>
        </Row>
      </section>
    </footer>
  );
}
