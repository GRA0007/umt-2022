import recipes from '/src/data/recipes.json'

const createPlan = async () => {
  await new Promise((res, rej) => setTimeout(res, 1000))
  return [recipes[0]]
}
