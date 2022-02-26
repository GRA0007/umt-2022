import { useState, useEffect } from 'react'

import { Frog, Button, DetailedRecipeCard } from '/src/components'
import { createPlan, getRecipeAlternative } from '/src/services/plan'
import { cycleArray } from '/src/util/cycleArray'

import { Container, PlanContainer, RecipeCard, RecipeDetails, ModalContainer } from './planningStyle'

const DAY_KEYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const Planning = () => {
  const [plan, setPlan] = useState(null)

  // Create a plan on load
  useEffect(() => {
    createPlan()
      .then(plan => setPlan(plan))
  }, [])

  return plan
    ? <WeekPlan plan={plan} />
    : <StartPlanning />
}

const StartPlanning = ({ handleStart }) => {
  return <Container>
    <h1>Planning Your Week</h1>
    <Frog loading style={{ maxWidth: '30ch' }}/>
  </Container>
}

const WeekPlan = ({ plan }) => {
  const [changeRecipe, setChangeRecipe] = useState(null)
  const day = (new Date()).getDay()
  const dayKeys = cycleArray(DAY_KEYS, day - 1)

  return <Container>
    {changeRecipe !== null && <ChangePlanRecipe
      plan={plan}
      recipeIndex={changeRecipe}
      onDismiss={() => setChangeRecipe(null)} />}
    <h1>How does this look?</h1>
    <PlanContainer>
      {plan.map((recipe, i) => <RecipeCard key={i}>
        <span className={`day ${i === 0 && 'today'}`}>{dayKeys[i]}</span>
        <RecipeDetails onClick={() => setChangeRecipe(i)}>
          { recipe.name } 
        </RecipeDetails>
      </RecipeCard>)}
    </PlanContainer>
  </Container> 
}

const ChangePlanRecipe = ({ plan, recipeIndex, onDismiss }) => {
  const [alternatives, setAlternatives] = useState()

  useEffect(() => {
    getRecipeAlternative(plan, recipeIndex)
      .then(setAlternatives)
  }, [])

  const recipes = alternatives && [plan[recipeIndex], ...alternatives]
  console.log(recipes)
  return <ModalContainer>
    <h2>What would you prefer?</h2>
    {!recipes && <Frog loading={true} />}
    {recipes && recipes.map(recipe =>
       <DetailedRecipeCard key={recipe.name} recipe={recipe} />
    )}
  </ModalContainer>
}

export default Planning
