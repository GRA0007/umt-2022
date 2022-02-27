import styled from '@emotion/styled'

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4em;
  margin: 2em 2em 5em;

  h1 {
    margin: 0;
    font-size: 2.5rem;
  }
`

export const Scroll = styled.div`
  flex: 1 1 auto;
  height: 0;
  overflow-y: auto;
  width: 100%;
`
