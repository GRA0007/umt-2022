import { useState } from 'react'

import { Frog, Button } from '/src/components'
import { createPlan } from '/src/services/plan'

import { Container } from './planningStyle'

const Planning = () => {
  const [plan, setPlan] = useState(null)

  const handleStart = () => {

  }

  return plan
    ? <WeekPlan plan={plan} />
    : <StartPlanning />
}

const StartPlanning = () => {
  return <Container>
    <h1>Plan Your Week</h1>
    <Frog />
    <Button>Plan Week</Button>
  </Container>
}

const WeekPlan = ({ plan }) => {
  return <>Hi</> 
}


export default Planning
