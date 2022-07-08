import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyles from './assets/globalStyles/globalStyles'
import Routes from './routes';
import { AuthProvider } from './contexts/auth';
function App() {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>


    </>
  )
}

export default App
