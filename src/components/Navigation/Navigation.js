import { NavLink } from 'react-router-dom'
import { NavContainer, Tab } from './navigationStyle'

const Navigation = () => {
  return <NavContainer>
    <Tab as={NavLink} to='/meals'>Meal Plan</Tab>
    <Tab as={NavLink} to='/shopping'>Shopping List</Tab>
  </NavContainer>
}

export default Navigation
