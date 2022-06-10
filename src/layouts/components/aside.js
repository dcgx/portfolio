import React from 'react'
import styled from 'styled-components'
//w-48 fixed bottom-0 left-0

import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'

const StyledAside = styled.footer`
  width: var(--aside-width);
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100vh;
  border: 1px solid var(--light-gray);
  .inner {
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 20px 0;
    svg {
      margin-bottom: 12px;
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const Aside = () => {
  return (
    <StyledAside>
      <div className="inner ">
        <BsGithub size={30} />
        <BsTwitter size={30} />
        <BsLinkedin size={30} />
      </div>
    </StyledAside>
  )
}

export default Aside
