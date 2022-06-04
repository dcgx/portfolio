import styled from 'styled-components'

const StyledTabButton = styled.button`
  background: transparent;
  font-weight: 500;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 30px 2px;
  height: 42px; // tab-height
  border-left: 2px solid #94a3b8;
  color: var(--slate);
  font-family: 'Space Mono', monospace;
  color: ${({ isActive }) => (isActive ? 'var(--violet)' : 'var(--slate)')};
  border-left: 2px solid ${({ isActive }) => (isActive ? 'var(--violet)' : 'var(--slate)')};

  &:hover,
  &:focus {
    background-color: #f8fafc;
  }
`

const TabButton = ({ children }) => {
  return (
    <StyledTabButton role="tab" isActive={true}>
      <span>{children}</span>
    </StyledTabButton>
  )
}

export default TabButton
