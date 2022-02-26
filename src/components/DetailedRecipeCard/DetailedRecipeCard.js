import { CardContainer } from './detailedRecipeCardStyle'

const DetailedRecipeCard = ({ recipe, ...props }) => {
  return <CardContainer {...props}>
    <header>
      <span>{ recipe.name }</span>
    </header>
    <span>{ recipe.diet.map(d => <label key={i}>{d}</label>) }</span>
  </CardContainer>
}

export default DetailedRecipeCard
