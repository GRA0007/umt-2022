import { Navigate } from 'react-router-dom'
import { CheckItem } from '/src/components'
import { Main, Scroll } from './shoppingStyle'

import { useIngredients } from '/src/hooks'

const Shopping = () => {
  const ingredients = useIngredients(state => state.ingredients)

  if (ingredients.length === 0) return <Navigate to="/" />

  return (
    <Main>
      <h1>Shopping List</h1>

      <Scroll>
        {ingredients.map(ingredient => (
          <CheckItem
            checked={ingredient.have}
            key={ingredient.label}
            onClick={() => setIngredients(ingredients.map(i => i.label === ingredient.label ? {...i, bought: !i.bought} : i))}
          >{ingredient.label.toLocaleLowerCase()}</CheckItem>
        ))}
      </Scroll>
    </Main>
  )
}

export default Shopping