import { Navigate } from 'react-router-dom'

import { DetailedRecipeCard, Navigation, Top } from '/src/components'
import { cycleArray } from '/src/util/cycleArray'
import { useFoodPlan } from '/src/hooks'

import { Container, PlanContainer } from './mealsStyle'

const DAY_KEYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const Meals = () => {
  const plan = useFoodPlan(state => state.plan)
  const day = (new Date()).getDay()
  const dayKeys = cycleArray(DAY_KEYS, day)

  if (!plan)
    return <Navigate to='/' />
  
  const cycledPlan = cycleArray(plan, day)

  return <Container>
    <Top />
    <section>
      <h1 style={{ textAlign: 'center' }}>Your Week</h1>
      <PlanContainer>
        {cycledPlan.map((recipe, i) => <div key={`${i}${recipe.name}`}>
          <span className={`day ${i === 0 && 'today'}`}>{dayKeys[i]}</span>
          <DetailedRecipeCard recipe={recipe} link />
        </div>)}
      </PlanContainer>
    </section>
    <Navigation />
  </Container> 
}

export default Meals
