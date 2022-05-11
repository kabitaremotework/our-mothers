import React from "react"
import { FaEnvelope } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import styled from "styled-components"

const NavTop = () => {
  return (
    <>
      <TopNav>
        <div className="item">
          <p>Web: https://www.our-mothers.org</p>
        </div>

        <div className="item">
          <p>
            <FaEnvelope />
          </p>
          <p>dev@gmil.com</p>
        </div>
        <div className="item">
          <p>
            <FaPhone />
          </p>
          <span>342-409-2356</span>
        </div>
      </TopNav>
    </>
  )
}

export default NavTop

const TopNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  width: 95vw;
  max-width: 1450px;
  
  margin: 0 auto;
   .item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    p {
      align-self: center;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`
