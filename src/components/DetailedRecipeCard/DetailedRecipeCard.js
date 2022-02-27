import { CardContainer, ImageContainer, CardImage, CardDetails } from './detailedRecipeCardStyle'

const DIET_KEYS = {
  'DAIRY-FREE': 'DF',
  'VEGAN': 'VEG',
  'VEGETARIAN': 'V',
  'GLUTEN-FREE': 'GF',
}

const DetailedRecipeCard = ({ recipe, link, ...props }) => {
  return <CardContainer {...props} as={link ? 'a' : 'div'} href={recipe.link} target="_blank" rel="noreferrer nofollow">
    <ImageContainer className='img-container'>
      <CardImage src={recipe.image} />
    </ImageContainer>
    <CardDetails>
      <header>
        <span>{ recipe.name }</span>
        <span className="diet">
          {recipe.diet.map(d =>
            <label key={d}>{DIET_KEYS[d]}</label>)}
        </span>
      </header>
      <div>
        <span>{ recipe.difficulty.toLowerCase() }</span>
        <span className='no-italic'>|</span>
        <span>{ recipe.servingSize } Servings</span>
      </div>
    </CardDetails>
  </CardContainer>
}

export default DetailedRecipeCard
