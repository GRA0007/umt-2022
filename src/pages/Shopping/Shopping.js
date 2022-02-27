import { Navigate } from 'react-router-dom'
import { CheckItem, Navigation } from '/src/components'
import { Main, Scroll } from './shoppingStyle'

import { useIngredients } from '/src/hooks'

const Shopping = () => {
  const { ingredients, setIngredients } = useIngredients()

  if (ingredients.length === 0) return <Navigate to="/" />

  return (
    <Main>
      <h1>Shopping List</h1>

      <Scroll>
        {ingredients.filter(i => !i.have).map(ingredient => (
          <CheckItem
            checked={ingredient.bought}
            key={ingredient.label}
            onClick={() => setIngredients(ingredients.map(i => i.label === ingredient.label ? {...i, bought: !i.bought} : i))}
          >{ingredient.label.toLocaleLowerCase()}</CheckItem>
        ))}
      </Scroll>

      <Navigation />
    </Main>
  )
}

export default Shopping