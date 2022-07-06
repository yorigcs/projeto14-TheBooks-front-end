import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyles from './assets/globalStyles/globalStyles'
import Routes from './routes'
function App() {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
