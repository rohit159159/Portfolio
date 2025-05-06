import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Logo-removebg-preview.png"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={16} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="http://www.linkedin.com/in/-rohitkumar"><img src={navIcon1} alt="Icon" /></a>

            <a href="https://github.com/rohit159159"><img src={navIcon2} alt="Icon" /></a>
        
              <a href="https://www.instagram.com/rohitkumar_.0.0?"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
