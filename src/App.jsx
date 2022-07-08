import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyles from './assets/globalStyles/globalStyles'
import Routes from './routes';
import { AuthProvider } from './contexts/auth';
import { CartProvider } from './hooks/useCart'

function App() {

  return (
    <CartProvider>
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </CartProvider>

  )
}

export default App
