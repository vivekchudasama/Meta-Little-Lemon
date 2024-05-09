import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Container className="not-found align-items-center">
      <Row className=" justify-content-center ">
        <Col md={6} className="text-center pt-5">
          <h1 className="text-warning mt-5 mb-5">Sorry</h1>
          <h3 className="text--highlight-dark t-5 mb-5">We're Working On it....</h3>
          <Link to="/">
            <Button variant="warning" className="text-black">
              Back To Home
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
