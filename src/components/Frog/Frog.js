import { FrogCage, FrogImage } from './frogStyle'

const FROG_URL = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffthmb.tqn.com%2FAdqO3rkUDPwpaNCMGBe7JLFRq88%3D%2F2000x1500%2Ffilters%3Afill(auto%2C1)%2FGettyImages-175174320-581251b65f9b58564ccaffe2.jpg&f=1&nofb=1'

const Frog = ({ loading }) => <FrogCage>
  <FrogImage src={FROG_URL} alt="A cute frog pixel" />
  {loading && '...'}
</FrogCage>

export default Frog
