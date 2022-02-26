import styled from '@emotion/styled'

export const Wrapper = styled.button`
  margin: 0;
  font: inherit;
  border: 2px solid var(--brand-shadow);
  color: var(--background);
  font-size: 1.8em;
  background: var(--brand);
  box-shadow: 0 .2em 0 0 var(--brand-shadow);
  padding: .5em 1.2em;
  border-radius: .5em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transform: translateY(-.2em);
  transition: transform .15s, box-shadow .15s, background .15s, color .15s, border .15s;

  &:active {
    transform: translateY(0);
    box-shadow: 0 0 0 0 var(--brand-shadow);
  }
  &:disabled {
    opacity: .6;
    cursor: default;
  }
`