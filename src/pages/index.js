import { Route, Routes } from 'react-router-dom'

import Onboarding from './Onboarding/Onboarding'
import PlanningPage from './Planning/Planning'
import MealsPage from './Meals/Meals'

const Pages = () => (
  <Routes>
    <Route path="/" element={<Onboarding />} />
    <Route path="/planning" element={<PlanningPage />} />
    <Route path="/meals" element={<MealsPage />} />
  </Routes>
)

export default Pages
