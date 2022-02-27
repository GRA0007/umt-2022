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

export const Tab = styled.a`
  display: flex;
  width: 100%;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--background);
  text-decoration: none;

  &.active {
    border-radius: .5rem .5rem 0 0;
    background: var(--brand);
    box-shadow: 0px -4px 0px 0px var(--brand),
                2px 0px 5px 2px hsla(0deg 0% 0% / 10%)
  }
`
