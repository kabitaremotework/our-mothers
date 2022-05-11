import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <MyFooter>
      <p>Our Mothers Inc. {new Date().getFullYear()}</p>
      <Link to="/contact">
         <Button primary="true" round="true" to="/contact">DONATE</Button>
         </Link>
    </MyFooter>
  )
}

export default Footer


const MyFooter = styled.footer`
background-color: #142C8E;
color: #fff;
display: flex;
align-items: center;
justify-content: space-between;
padding: 50px 50px;
`