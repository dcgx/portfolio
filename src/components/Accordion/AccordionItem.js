import React from 'react'
import styled from 'styled-components'

const StyledAccordionItem = styled.article`
  min-height: 700px;
  width: 100%;
  cursor: pointer;
  background-image: url(https://i0.wp.com/evilnapsis.com/wp-content/uploads/2015/06/adminlt2.png);
  ${({ expanded }) => (expanded ? 'flex-grow: 1;' : 'flex-basis: 90px;')}

  .inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 5rem;
    height: 100%;
    background: linear-gradient(180deg, #00000071 20%, #000);
  }
`

const AccordionItem = ({ children, expanded, onClick }) => {
  return (
    <StyledAccordionItem onClick={onClick} expanded={expanded}>
      {expanded && <div className="inner">{children}</div>}
    </StyledAccordionItem>
  )
}

export default AccordionItem
