import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: block;
  color: var(--brand);
  text-transform: capitalize;
  padding: .5em 0 .5em 2.5em;
  font-size: 1.2em;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    border: 2px solid currentColor;
    position: absolute;
    top: 15%;
    height: 60%;
    aspect-ratio: 1 / 1;
    left: 0;
    border-radius: 100%;
  }

  &.checked {
    opacity: .7;
    font-style: italic;
    text-decoration: line-through;

    &::before {
      background: currentColor;
    }
  }
`