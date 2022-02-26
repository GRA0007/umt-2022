import styled from '@emotion/styled'

export const Container = styled.main`
  flex: 1;
  gap: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em 0;

  & > header {
    text-align: center;
    color: var(--brand);

    h1 { margin: 0 }
  }
`

export const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`

export const RecipeCard = styled.div`
  padding: .5em;
  display: grid;
  grid-template-columns: 2.5em 1fr;
  column-gap: .5em;
  height: 2em;

  color: var(--brand);

  .day {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;

    &.today {
      border: 2px solid var(--brand);
      border-radius: 50%;
    }
  }
`

export const RecipeDetails = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: var(--brand);
  color: var(--background);
  border-radius: .5rem;
  box-sizing: border-box;
  padding-left: .75em;
  box-shadow: 0px 3px 0px 0px var(--brand-shadow);
`

export const ModalContainer = styled.main`
  --gap: 20%;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: calc(100% - var(--gap));
  height: calc(100% - var(--gap));
  margin-top: calc(var(--gap) / 2);

  background: var(--background);
  box-shadow: 0 0 0 10000px hsla(0deg 0% 0% / 33%);
  border-radius: .5rem;
  padding: .5em;
  z-index: 10;
`

export const RecipeList = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
  gap: 1em;
`
