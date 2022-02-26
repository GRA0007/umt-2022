import recipes from '/src/data/recipes.json'

export const createPlan = async () => {
  await new Promise(res => setTimeout(res, 3000))
  const shuffledRecipes = recipes.sort((a, b) => Math.random() < .5 ? 1 : -1)
  return shuffledRecipes.filter((_, i) => i < 7)
}

export const getRecipeAlternative = async (plan, recipeIndex) => {
  await new Promise(res => setTimeout(res, 1000))
  return recipes
    .sort((a, b) => Math.random() < .5 ? 1 : -1)
    .filter(r => !plan.some(pl => pl.name === r.name))
    .filter((_, i) => i < 2)
}
