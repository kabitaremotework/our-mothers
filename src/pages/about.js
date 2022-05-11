import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
const AboutUs = () => {
  return (
    <AboutContainer>
      <h1> Our History</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent</p>
      <StaticImage 
           src="../images/paddy.png" 
           alt="Paddy Hibbert, Secretary" 
           className='paddy-img'
           placeholder='traceSVG'
           layout='fullWidth'
           ></StaticImage>
           <p>Paddy Hibbert, Secretary</p>
           <p>Son: Roy Hibbert</p>
    </AboutContainer>
  )
}

export default AboutUs

const AboutContainer = styled.div`
padding: 10px 50px;

.paddy-img {
  width: 400px;
  height: 280px;
}

`
