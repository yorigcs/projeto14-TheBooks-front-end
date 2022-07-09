import { createContext, useContext, useState } from 'react';
import axiosI from '../services/axios';

const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storagedCart = localStorage.getItem('theBooksCart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  async function addProduct(productId) {
    try {
      const cartUpdated = [...cart];

      const foundProductInCart = cartUpdated.find(
        (product) => product._id === productId
      );
      const stockProductAmount = await axiosI
        .get(`/book/${productId}`)
        .then(({ data }) => data.availables);

      const currentAmountProduct = foundProductInCart
        ? foundProductInCart.amount
        : 0;
      const amountProduct = currentAmountProduct + 1;

      if (amountProduct > stockProductAmount) {
        console.log('Quantidade solicitada fora de estoque');
        return;
      }

      if (foundProductInCart) {
        foundProductInCart.amount++;
      } else {
        const product = await axiosI
          .get(`/book/${productId}`)
          .then(({ data }) => data);

        const newProduct = {
          ...product,
          amount: 1,
        };

        cartUpdated.push(newProduct);
      }

      setCart(cartUpdated);
      localStorage.setItem('theBooksCart', JSON.stringify(cartUpdated));
    } catch (error) {
      console.log('error', error);
    }
  }

  async function updateProductAmount({ productId, amount }) {
    try {
      if (amount <= 0) return;

      const stockProductAmount = await axiosI
        .get(`/book/${productId}`)
        .then(({ data }) => data.availables);

      if (amount > stockProductAmount) {
        console.log('Quantidade solicitada fora de estoque');
        return;
      }

      const cartUpdated = [...cart];

      const foundProductInCart = cartUpdated.find(
        (product) => product._id === productId
      );

      if (foundProductInCart) {
        foundProductInCart.amount = amount;
        setCart(cartUpdated);
        localStorage.setItem('theBooksCart', JSON.stringify(cartUpdated));
      } else {
        throw Error();
      }
    } catch {
      console.log('Erro na alteração de quantidade do produto');
    }
  }

  function removeProduct(productId) {
    try {
      const cartUpdated = [...cart];

      const indexProductCart = cartUpdated.findIndex(
        (product) => product._id === productId
      );

      if (indexProductCart >= 0) {
        cartUpdated.splice(indexProductCart, 1);
        setCart(cartUpdated);
        localStorage.setItem('theBooksCart', JSON.stringify(cartUpdated));
      } else {
        throw Error();
      }
    } catch {
      console.log('Erro na remoção do produto');
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, addProduct, updateProductAmount, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
