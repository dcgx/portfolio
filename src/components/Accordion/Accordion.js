import React from 'react'
import styled from 'styled-components'

const StyledAccordion = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  max-width: var(--max-w-screen-lg);
  border: 1px solid red;
`

const Accordion = ({ children }) => {
  return <StyledAccordion>{children}</StyledAccordion>
}

export default Accordion
