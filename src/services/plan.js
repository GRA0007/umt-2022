import recipes from '/src/data/recipes.json'

export const createPlan = async () => {
  await new Promise(res => setTimeout(res, 3000))
  return recipes.filter((_, i) => i < 7)
}

export const getRecipeAlternative = async (plan, recipeIndex) => {
  await new Promise(res => setTimeout(res, 1000))
  console.log(plan)
  return [plan[0], plan[1]]
}
