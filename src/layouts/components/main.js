import styled from 'styled-components'

const StyledMain = styled.main`
  display: flex;
  margin: 0 auto;
  max-width: 1660px;
  padding-left: calc(var(--aside-width));

  @media only screen and (max-width: 768px) {
    padding-left: 0;
    margin: 0 10px;
  }

  @media only screen and (min-width: 1350px) {
    margin: 30px auto;
  }
`

const MainContainer = ({ id, children, className }) => {
  return (
    <StyledMain id={id} className={className}>
      {children}
    </StyledMain>
  )
}

export default MainContainer
