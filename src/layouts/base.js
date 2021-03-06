import Head from 'next/head'

const BaseLayout = ({ children }) => {
  return (
    <div id="main">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  )
}

export default BaseLayout
