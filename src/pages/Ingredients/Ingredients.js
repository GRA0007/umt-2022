import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, CheckItem } from '/src/components'
import { Main, Scroll } from './ingredientsStyle'

import { useFoodPlan, useIngredients } from '/src/hooks'

const Ingredients = () => {
  const navigate = useNavigate()
  const plan = useFoodPlan(state => state.plan)
  const { ingredients, setIngredients } = useIngredients()

  useEffect(() => {
    const allIngredients = [...new Set(plan.reduce((ingredients, recipe) => [...ingredients, ...recipe.ingredients], []).map(i => i[0]))]
    setIngredients(allIngredients.map(i => ({
      label: i,
      have: false,
      bought: false,
    })))
  }, [plan])

  return (
    <Main>
      <h1>Ok, check off what you already have</h1>

      <Scroll>
        {ingredients.map(ingredient => (
          <CheckItem
            checked={ingredient.have}
            key={ingredient.label}
            onClick={() => setIngredients(ingredients.map(i => i.label === ingredient.label ? {...i, have: !i.have} : i))}
          >{ingredient.label.toLocaleLowerCase()}</CheckItem>
        ))}
      </Scroll>
      
      <Button onClick={() => navigate('/meals')}>See your plan</Button>
    </Main>
  )
}

export default Ingredients