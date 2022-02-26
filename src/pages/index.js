import { Route, Routes } from 'react-router-dom'

import PlanningPage from './Planning/Planning'

const Pages = () => (
  <Routes>
    <Route path="/" element={<h1>Food Frog</h1>} />
    <Route path="/planning" element={<PlanningPage />} />
  </Routes>
)

export default Pages
