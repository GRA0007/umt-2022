import { FrogCage, FrogImage } from './frogStyle'

const frog = new URL('/src/res/foodfrog.png', import.meta.url)
const frogsmall = new URL('/src/res/foodfrogsmall.png', import.meta.url)
const frogthink = new URL('/src/res/frogthink.gif', import.meta.url)

const Frog = ({ loading, small, ...props }) => (
  <FrogCage className={`${loading ? 'loading' : ''} ${small ? 'small' : ''}`} {...props}>
    <FrogImage
      src={loading ? frogthink : (small ? frogsmall : frog)}
      alt="A cute frog pixel" />
  </FrogCage>
)

export default Frog
