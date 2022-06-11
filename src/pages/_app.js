import { useState, useEffect } from 'react'

import '@styles/style.css'

import { ThemeProvider } from 'styled-components'
import ThemeContext from '../contexts/theme'
import DefaultLayout from '@layouts/default'
import GlobalStyle from '../styles/globals'
import lightTheme from '../themes/light'
import { useTheme } from '../hooks/useTheme'

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
      <ThemeContext>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeContext>
    )
  } else {
    return (
      <ThemeContext>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContext>
    )
  }
}

export default MyApp
