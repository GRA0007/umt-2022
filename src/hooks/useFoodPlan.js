import create from 'zustand'

const useFoodPlan = create(set => ({
  plan: null,
  setPlan: plan => set({ plan }),
}))

export default useFoodPlan
