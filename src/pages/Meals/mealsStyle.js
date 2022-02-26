import styled from '@emotion/styled'

export const Container = styled.main`
  flex: 1;
  gap: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 2em 2em;
  padding: 0 2.5em;
  padding-bottom: 5em;

  & > header {
    text-align: center;
    color: var(--brand);
  }

  h1 {
    font-size: 2.5rem;
  }

  .img-container {
    max-height: 4em;
  }
`

export const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;

  & > div {
    display: grid;
    grid-template-columns: 3em 1fr;
    column-gap: 1em;
    color: var(--brand);

    > :first-child {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      aspect-ratio: 1 / 1;
      align-self: center;

      &.today {
        border: 2px solid var(--brand);
        border-radius: 50%;
      }
    }
  }
`
