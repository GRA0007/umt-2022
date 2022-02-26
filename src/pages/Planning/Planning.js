import { useState, useEffect } from 'react'

import { Frog, Button, DetailedRecipeCard } from '/src/components'
import { createPlan, getRecipeAlternative } from '/src/services/plan'
import { cycleArray } from '/src/util/cycleArray'

import { Container, PlanContainer, RecipeCard, RecipeDetails, ModalContainer, RecipeList } from './planningStyle'

const DAY_KEYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const Planning = () => {
  const [plan, setPlan] = useState(null)

  // Create a plan on load
  useEffect(() => {
    createPlan()
      .then(plan => setPlan(plan))
  }, [])

  const changePlanRecipe = (recipeIndex, recipe) => {
    let p = [...plan]
    p[recipeIndex] = recipe
    setPlan(p)
  }

  return plan
    ? <WeekPlan plan={plan} changePlanRecipe={changePlanRecipe} />
    : <StartPlanning />
}

const StartPlanning = ({ handleStart }) => {
  return <Container>
    <h1>Planning Your Week</h1>
    <Frog loading style={{ maxWidth: '30ch' }}/>
  </Container>
}

const WeekPlan = ({ plan, changePlanRecipe }) => {
  const [changeRecipe, setChangeRecipe] = useState(null)
  const day = (new Date()).getDay()
  const dayKeys = cycleArray(DAY_KEYS, day - 1)

  const handleChangeRecipe = recipe => {
    changePlanRecipe(changeRecipe, recipe)
    setChangeRecipe(null)
  }

  return <Container>
    {changeRecipe !== null && <ChangePlanRecipe
      plan={plan}
      recipeIndex={changeRecipe}
      onFinish={handleChangeRecipe} />}
    <header>
      <h1>How does this look?</h1>
      <p>Tap a recipe to swap it out</p>
    </header>
    <PlanContainer>
      {plan.map((recipe, i) => <RecipeCard key={`${i}{recipe.name}`}>
        <span className={`day ${i === 0 && 'today'}`}>{dayKeys[i]}</span>
        <RecipeDetails onClick={() => setChangeRecipe(i)}>
          { recipe.name } 
        </RecipeDetails>
      </RecipeCard>)}
    </PlanContainer>
    <Button>Done</Button>
  </Container> 
}

const ChangePlanRecipe = ({ plan, recipeIndex, onFinish }) => {
  const [alternatives, setAlternatives] = useState()

  useEffect(() => {
    getRecipeAlternative(plan, recipeIndex)
      .then(setAlternatives)
  }, [])

  const recipes = alternatives && [plan[recipeIndex], ...alternatives]
  return <ModalContainer>
    <h2>What would you prefer?</h2>
    {!recipes && <Frog loading={true} />}
    <RecipeList>
      {recipes && recipes.map((recipe, i) =>
         <DetailedRecipeCard onClick={() => onFinish(recipe)} key={`${recipe.name}${i}`} recipe={recipe} />
      )}
    </RecipeList>
  </ModalContainer>
}

export default Planning
