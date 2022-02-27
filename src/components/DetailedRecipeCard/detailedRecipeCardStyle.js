import styled from '@emotion/styled'

export const CardContainer = styled.a`
  display: grid;
  width: 100%;
  grid-template-rows: 1fr auto;
  box-sizing: border-box;

  color: var(--background);
  border-radius: .5rem;
  background: var(--brand);
  overflow: hidden;
  box-shadow: 0px 3px 0px 0px var(--brand-shadow);
  text-decoration: none;
`

export const CardDetails = styled.div`
  padding: .5em;

  header {
    font-weight: bold;
    font-size: 1.2rem;

    span.diet {
      display: inline-flex;
      gap: .2rem;
      padding-left: 1em;
      font-size: .8rem;
      opacity: .7;

      label {
        display: inline-block;
        background: var(--background);
        color: var(--brand);
        border-radius: .5rem;
        padding: .1rem .4rem;
      }
    }
  }

  div {
    display: flex;
    gap: 10px;
    text-transform: capitalize;
    font-style: italic;

    .no-italic {
      font-style: initial;
    }
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  min-height: 0;
  max-height: 4em;
`

export const CardImage = styled.img`
  display: block;
  background-image: linear-gradient(to right, grey 5%, silver 45%, silver 55%, grey 95%);
  background-size: 200%;
  width: 100%;
  height: 100%;
  min-height: 4em;
  object-fit: cover;
  animation: sliding 2s infinite linear;

  @keyframes sliding {
    100% {
      background-position: 200%;
    }
  }
`
