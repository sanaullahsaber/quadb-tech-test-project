import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5 ">
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>
              We are a premier entertainment platform dedicated to providing you
              with the best movie experiences. Our mission is to deliver
              high-quality movies, exceptional customer service, and a
              comfortable and enjoyable atmosphere for all our patrons.
            </p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>123 Street, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-2">
        <Container className="d-flex justify-content-center mb-3">
          <p className="mb-0">© 2023 Movies Mania. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
