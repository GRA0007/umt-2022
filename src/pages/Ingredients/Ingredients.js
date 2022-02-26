import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '/src/components'
import { Main } from './ingredientsStyle'

const Ingredients = () => {
  const navigate = useNavigate()

  return (
    <Main>
      <h1>Ok, check off what you already have</h1>
      
      <Button onClick={() => navigate('/meals')}>See your plan</Button>
    </Main>
  )
}

export default Ingredients