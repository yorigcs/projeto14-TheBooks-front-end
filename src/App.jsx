import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyles from './assets/globalStyles/globalStyles'
import Routes from './routes';
import { AuthProvider } from './contexts/auth';
function App() {

  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>

    </>
  )
}

export default App
