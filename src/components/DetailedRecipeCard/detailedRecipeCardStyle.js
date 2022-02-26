import styled from '@emotion/styled'

export const CardContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 1fr auto;
  box-sizing: border-box;

  color: var(--background);
  border-radius: .5rem;
  background: var(--brand);
  overflow: hidden;
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

export const CardImage = styled.img`
  display: block;
  background: linear-gradient(30deg, grey, silver);
  width: 100%;
  height: 100%;
`
