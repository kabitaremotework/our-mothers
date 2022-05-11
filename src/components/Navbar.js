import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
           <h1 className="logo">O.U.R. MOTHERS Inc.</h1> 
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            home
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            About us
          </Link>
          <Link
            to="/getInvolved"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Get Involved
          </Link>
          <Link
            to="/projectsAndEvents"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Projects/Events
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Contact Us
          </Link>
          
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setShow(false)}>
              Donate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar