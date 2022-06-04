import styled from 'styled-components'

export const StyledLogo = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  border: 2px solid #000;
  font-weight: 600;
  padding: 1.2rem;
  width: 20px;
  height: 20px;
  border-radius: 1999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
`
