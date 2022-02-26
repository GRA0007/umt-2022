import styled from '@emotion/styled'

export const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  height: 3.5em;
  width: 100vw;
  background: var(--brand-shadow);
  bottom: 0;
  color: var(--background);
`

export const Tab = styled.div`
  display: flex;
  width: 100%;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;

  &:not(:first-of-type) {
    border-left: 3px solid var(--background);
  }
`
