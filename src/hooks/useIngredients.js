import create from 'zustand'

const useIngredients = create(set => ({
  ingredients: [],
  setIngredients: ingredients => set({ ingredients }),
}))

export default useIngredients
