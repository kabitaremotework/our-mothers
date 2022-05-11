import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'



import styled from 'styled-components'

const LayoutStyles = styled.div`
min-height: 100vh;
display: grid;
grid-template-rows: auto 1fr auto;
`

const Layout = ({children}) => {
  return (
   <LayoutStyles>
   <Navbar />
    <main>
       {children} 
    </main>
    <Footer />
    </LayoutStyles>
  )
}

export default Layout
