import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  padding: 20px 0 5px;
  li {
    color: #52525b;
    font-size: 0.9rem;
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;

    &:before {
      content: '▹';
      position: absolute;
      font-size: 1rem;
      left: 0px;
      color: #818cf8;
    }
  }
`

const List = ({ children }) => {
  return <StyledList>{children}</StyledList>
}

export default List
