import { Route, Routes } from 'react-router-dom'

import Onboarding from './Onboarding/Onboarding'
import PlanningPage from './Planning/Planning'
import Ingredients from './Ingredients/Ingredients'
import MealsPage from './Meals/Meals'
import Shopping from './Shopping/Shopping'

const Pages = () => (
  <Routes>
    <Route path="/" element={<Onboarding />} />
    <Route path="/planning" element={<PlanningPage />} />
    <Route path="/ingredients" element={<Ingredients />} />
    <Route path="/meals" element={<MealsPage />} />
    <Route path="/shopping" element={<Shopping />} />
  </Routes>
)

export default Pages
