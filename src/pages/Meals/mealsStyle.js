import styled from '@emotion/styled'

export const Container = styled.main`
  flex: 1;
  gap: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 2em 2em;
  padding-bottom: 5em;

  & > header {
    text-align: center;
    color: var(--brand);
  }

  h1 {
    font-size: 2.5rem;
    margin-top: 0;
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

    > span {
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
