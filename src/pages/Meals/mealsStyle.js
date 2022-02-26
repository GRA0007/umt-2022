import styled from '@emotion/styled'

export const Container = styled.main`
  flex: 1;
  gap: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em 0;
  padding: 0 2.5em;

  & > header {
    text-align: center;
    color: var(--brand);

    h1 { margin: 0 }
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
    grid-template-columns: 4em 1fr;
  }
`
