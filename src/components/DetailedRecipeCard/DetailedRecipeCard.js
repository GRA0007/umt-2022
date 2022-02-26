import { CardContainer } from './detailedRecipeCardStyle'

const DIET_KEYS = {
  'DAIRY-FREE': 'DF',
  'VEGAN': 'VEG',
  'VEGETARIAN': 'V',
  'GLUTEN-FREE': 'GF',
}

const DetailedRecipeCard = ({ recipe, ...props }) => {
  return <CardContainer {...props}>
    <header>
      <span>{ recipe.name }</span>
    </header>
    <span>{ recipe.diet.map(d => <label key={d}>{d.split('-').map(x => x[0]).join('')}</label>) }</span>
  </CardContainer>
}

export default DetailedRecipeCard
