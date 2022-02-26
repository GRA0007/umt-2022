import { Navigate } from 'react-router-dom'

import { Button, DetailedRecipeCard, Navigation } from '/src/components'
import { cycleArray } from '/src/util/cycleArray'
import { useFoodPlan } from '/src/hooks'

import { Container, PlanContainer, RecipeCard, RecipeDetails } from './mealsStyle'

const DAY_KEYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const Meals = () => {
  const { plan } = useFoodPlan()
  const day = (new Date()).getDay()
  const dayKeys = cycleArray(DAY_KEYS, day - 1)

  if (!plan)
    return <Navigate to='/' />

  const cycledPlan = cycleArray(plan, day - 1)

  return <Container>
    <section>
      <h1 style={{ textAlign: 'center' }}>Your Week</h1>
      <PlanContainer>
        {cycledPlan.map((recipe, i) => <div key={`${i}${recipe.name}`}>
          <span className={`day ${i === 0 && 'today'}`}>{dayKeys[i]}</span>
          <DetailedRecipeCard recipe={recipe} />
        </div>)}
      </PlanContainer>
    </section>
    <Navigation />
  </Container> 
}

export default Meals
