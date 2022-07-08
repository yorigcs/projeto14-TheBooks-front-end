import { createContext, useContext, useState } from 'react';

const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storagedCart = localStorage.getItem('theBooksCart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
