import '@styles/style.scss'
import { ThemeProvider } from 'next-themes'
import DefaultLayout from '@layouts/default'
import { useState, useEffect } from 'react'

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
  } else {
    return (
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }
}

export default MyApp
