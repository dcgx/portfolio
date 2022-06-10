import React from 'react'
import styled from 'styled-components'

const StyledAccordion = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  max-width: var(--max-w-screen-lg);

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 1400px;
    min-height: 100vh;
  }
`

const Accordion = ({ children }) => {
  return <StyledAccordion>{children}</StyledAccordion>
}

export default Accordion
