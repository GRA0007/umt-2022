import styled from '@emotion/styled'

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1em;
  color: var(--background);
  background: var(--brand-shadow);
  width: 100vw;
  justify-content: center;
  padding: .2em 0 .5em;
  position: sticky;
  top: 0;
  z-index: 50;

  span {
    font-weight: bold;
    font-size: 1.3em;
  }
`