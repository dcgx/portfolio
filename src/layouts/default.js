import BaseLayout from './base'

import Main from './components/main'
import Aside from './components/aside'
import Navbar from './components/navbar'
import Footer from './components/footer'

const DefaultLayout = ({ children }) => {
  return (
    <BaseLayout>
      <>
        <Navbar />
        <Aside />
        <Main id="content">{children}</Main>
        <Footer />
      </>
    </BaseLayout>
  )
}

export default DefaultLayout
