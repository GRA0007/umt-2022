import { Wrapper } from './checkItemStyle'

const CheckItem = ({ checked, ...props }) => (
  <Wrapper className={checked ? 'checked' : ''} {...props} />
)

export default CheckItem