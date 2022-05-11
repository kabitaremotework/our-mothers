import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'
import '../assets/css/main.css'

const MainTheme = {
    color: {
        background: '#fff',
        text: '#000',
    },
    fonts: {
        header: 'Rationale',
        copyR: 'Rubik',
        copyS: 'Source Sans Pro',

    },

}

const GlobalStyles = createGlobalStyle`
body {
    background: ${({theme})=> theme.color.background};
    color: ${({theme})=> theme.color.text};
    font-family: ${({theme})=> theme.fonts.copyR}, sans-serif;
}
h1,h2,h3,h4,h5 {
    font-family: ${({theme})=> theme.fonts.header}, sans-serif;
}
`


const Theme = ({children}) => {
  return (
      <ThemeProvider theme={MainTheme }>
          <GlobalStyles />
          <Normalize />
    <main>
       {children} 
    </main>
    </ThemeProvider>
  )
}

export default Theme
