import styled from 'styled-components'

const StyledTabPanels = styled.div`
  padding: 0 30px;
`

const TabPanels = ({ children }) => {
  return <StyledTabPanels role="tabpanel">{children}</StyledTabPanels>
}

export default TabPanels
