import { useState, useEffect } from 'react'

import '@styles/style.css'

import { ThemeProvider } from 'styled-components'
import DefaultLayout from '@layouts/default'
import GlobalStyle from '../styles/globals'
import theme from '../themes/light'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  if (typeof window === 'undefined') {
    return <></>
  } else if (Component.name === 'Projects' || Component.name === 'Project') {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  } else {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }
}

export default MyApp
