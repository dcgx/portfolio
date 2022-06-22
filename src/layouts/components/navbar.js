import styled from 'styled-components'

import { Logo } from '@components'

import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
const StyledNavbar = styled.nav`
  width: 100%;
  padding: 0;
  top: 0;
  position: sticky;
  background-color: #fff;

  .inner {
    width: 100%;
    margin: 0 auto;
    top: 0;
    max-width: calc(100vw - 20px);
    padding: var(--global-padding);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .navbar-actions {
      display: flex;
      .toggle-theme-button {
        width: 3rem;
        height: 3rem;
        border-radius: 999px;
        background: #e4e4e7;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 4px;
      }
    }
  }
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="inner">
        <Logo />

        <div className="navbar-actions">
          <button className="toggle-theme-button">
            <MdOutlineDarkMode size={25} />
          </button>
          <button className="toggle-theme-button">🇪🇸 </button>
        </div>
      </div>
    </StyledNavbar>
  )
}

export default Navbar
