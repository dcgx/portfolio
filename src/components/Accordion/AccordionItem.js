import React, { useState } from 'react'
import styled from 'styled-components'

const StyledAccordionItem = styled.article`
  min-height: 700px;
  width: 100%;
  cursor: pointer;
  background-image: ${({ imageSm }) => `url(${imageSm})`};
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.35s;
  ${({ expanded, image }) =>
    expanded
      ? `flex-grow: 1; flex-basis: 90px; background-image: url(${image});`
      : 'flex-basis: 90px;'}

  .inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    transition: 0.45s;
    padding: 5rem;
    height: 100%;
    background: linear-gradient(180deg, #00000071 20%, #000);
  }
`

const AccordionItem = ({ children, expanded, image, imageSm, onClick }) => {
  const [showInner, setShowInner] = useState(true)

  const handleClick = () => {
    onClick()
    setShowInner(false)
    setTimeout(() => {
      setShowInner(true)
    }, 400)
  }

  return (
    <StyledAccordionItem image={image} imageSm={imageSm} onClick={handleClick} expanded={expanded}>
      {expanded && <div className="inner">{showInner && children}</div>}
    </StyledAccordionItem>
  )
}

export default AccordionItem
