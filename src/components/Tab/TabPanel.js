import styled from 'styled-components'

const StyledTabPanel = styled.div`
  position: relative;
  .company {
    font-size: 1rem;
    font-weight: 600;
    color: #6366f1;
  }
`

const TabPanel = ({ children }) => {
  return <StyledTabPanel>{children}</StyledTabPanel>
}

export default TabPanel
