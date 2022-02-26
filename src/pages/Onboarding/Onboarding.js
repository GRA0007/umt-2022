import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Frog, Select } from '/src/components'
import { Main } from './onboardingStyle'

const Onboarding = () => {
  const [stage, setStage] = useState(0)
  const [freq, setFreq] = useState('3 times per week')
  const navigate = useNavigate()

  const pages = [
    (
      <Main style={{justifyContent: 'center'}}>
        <h1>Food Frog</h1>
        <Frog />
        <Button onClick={() => setStage(1)} key="begin">Begin</Button>
      </Main>
    ),
    (
      <Main>
        <h1>What's important to you?</h1>
        <Button onClick={() => setStage(2)}>Health</Button>
        <Button onClick={() => setStage(2)}>Price</Button>
        <Button onClick={() => setStage(2)}>Sustainability</Button>
      </Main>
    ),
    (
      <Main>
        <h1>How often do you want to cook?</h1>
        <Select
          options={['once a week', 'twice a week', '3 times per week', '4 times per week', '5 times per week', '6 times per week', 'every day']}
          value={freq}
          onChange={e => setFreq(e.value)}
        />
        <Button onClick={() => navigate('/planning')}>Let's Plan!</Button>
      </Main>
    ),
  ]

  return pages[stage]
}

export default Onboarding