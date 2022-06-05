import styled from 'styled-components'

import { Logo } from '@components'

const StyledNavbar = styled.nav`
  width: 100%;
  padding: 0;
  position: sticky;
  .inner {
    width: 100%;
    margin: 0 auto;
    top: 0;
    max-width: calc(100vw - 20px);
    padding: var(--global-padding);
  }
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="inner">
        <Logo />
      </div>
    </StyledNavbar>
  )
}

export default Navbar
