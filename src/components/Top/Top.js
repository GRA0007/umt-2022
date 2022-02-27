import { NavLink } from 'react-router-dom'
import { Frog } from '/src/components'
import { NavContainer } from './topStyle'

const Top = () => {
  return <NavContainer>
    <Frog small />
    <span>Food Frog</span>
  </NavContainer>
}

export default Top
