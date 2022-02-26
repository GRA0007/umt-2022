import { useState } from 'react'
import { Button, Frog } from '/src/components'

import { Main } from './onboardingStyle'

const Onboarding = () => {
  const [stage, setStage] = useState(0)

  const pages = [
    (
      <Main>
        <h1>Food Frog</h1>
        <Frog />
        <Button onClick={() => setStage(1)}>Begin</Button>
      </Main>
    ),
    (
      <Main>
        <h1>What's important to you</h1>
        <Button onClick={() => setStage(2)}>Health</Button>
        <Button onClick={() => setStage(2)}>Price</Button>
        <Button onClick={() => setStage(2)}>Sustainability</Button>
      </Main>
    ),
    (
      <Main>
        <h1>How often do you want to cook per week</h1>
        
      </Main>
    ),
  ]

  return pages[stage]
}

export default Onboarding