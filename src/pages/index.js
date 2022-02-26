import { Route, Routes } from 'react-router-dom'

import Onboarding from './Onboarding/Onboarding'
import PlanningPage from './Planning/Planning'

const Pages = () => (
  <Routes>
    <Route path="/" element={<Onboarding />} />
    <Route path="/planning" element={<PlanningPage />} />
  </Routes>
)

export default Pages
