import { Wrapper } from './selectStyle'

const Select = ({
  options = [],
  ...props
}) => (
  <Wrapper {...props}>
    {options.map(option => <option key={option}>{option}</option>)}
  </Wrapper>
)

export default Select