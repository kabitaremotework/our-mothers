import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <MyFooter>
      <div class="nameName">
        <h3>O.U.R Mothers Inc.</h3>
      </div>

      <div className="footer__service">
        <h3>Quick Links</h3>
        <br />
        <Link to="/" className="footer__link">
          home
        </Link>
        <Link to="/about" className="footer__link">
          About us
        </Link>
        <Link to="/getInvolved" className="footer__link">
          Get Involved
        </Link>
        <Link to="/projectsAndEvents" className="footer__link">
          Projects/Events
        </Link>
        <Link to="/contact" className="footer__link">
          Contact Us
        </Link>
      </div>

      <div class="footer__contact">
        <h3>Have a question</h3>
        <br />
        <p>201 Oklahoma, Dallas, USA</p>
        <p>236-456-7859</p>
        <p>ourmothers@gmail.com</p>
      </div>
      <Link to="/getInvolved">
        <Button primary="true" round="true" to="/contact">
          DONATE
        </Button>
      </Link>
    </MyFooter>
  )
}

export default Footer

const MyFooter = styled.footer`
  background-color: #142c8e;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 50px 50px;
  .footer__service {
    display: flex;
    gap: 16px;
    flex-direction: column;
  }
  .footer__link {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
