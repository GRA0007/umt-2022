import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Pages from '/src/pages'

ReactDOM.render(
  <BrowserRouter>
    <Pages />
  </BrowserRouter>,
  document.getElementById('app')
)