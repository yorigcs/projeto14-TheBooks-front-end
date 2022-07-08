import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyles from './assets/globalStyles/globalStyles'
import Routes from './routes'

import { CartProvider } from './hooks/useCart'

function App() {

  return (
    <CartProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
