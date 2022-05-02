import '@styles/style.scss'
import { ThemeProvider } from 'next-themes'
import DefaultLayout from '@layouts/default'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout

  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
