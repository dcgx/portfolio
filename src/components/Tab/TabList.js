import styled from 'styled-components'

const StyledTabList = styled.div`
  z-index: 3;
  position: relative;
  padding: 0;
  margin: 0;
`

const TabList = ({ children }) => {
  return <StyledTabList role="tablist">{children}</StyledTabList>
}

export default TabList
