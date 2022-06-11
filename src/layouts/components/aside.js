import React from 'react'
import styled from 'styled-components'
//w-48 fixed bottom-0 left-0

import { BsGithub, BsTwitter, BsLinkedin, BsBriefcase } from 'react-icons/bs'

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
    padding: 20px 0;

    .nav-links {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      a {
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        cursor: pointer;
        &:hover {
          border-radius: 20px;
          border: none;
          background: #f3f4f6;
        }
        span {
          font-size: 15px;
        }
      }
    }
    .social-links {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
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
        <div className="nav-links">
          <a>
            <BsBriefcase size={25} />
            <span>Sobre mí</span>
          </a>
          <a>
            <BsBriefcase size={25} />
            <span>Experiencia</span>
          </a>
          <a>
            <BsBriefcase size={25} />
            <span>Portafolio</span>
          </a>
          <a>
            <BsBriefcase size={25} />
            <span>Educación</span>
          </a>
        </div>
        <div className="social-links">
          <BsGithub size={30} />
          <BsTwitter size={30} />
          <BsLinkedin size={30} />
        </div>
      </div>
    </StyledAside>
  )
}

export default Aside
