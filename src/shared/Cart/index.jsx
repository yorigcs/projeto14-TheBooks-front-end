import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../util/format';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

import { Container, ProductTable, Total } from "./styles";
import { useAuth } from '../../contexts/auth';
import requestOrder from './requestOrder';

export default function Cart({ to, message, isSigned = false }) {
  const {userInfo, signOut} = useAuth();
  let navigate = useNavigate();
  const { cart, updateProductAmount, removeProduct } = useCart();

  const cartFormatted = cart.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount),
  }));
  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.amount;
    }, 0)
  );

  function handleProductIncrement(product) {
    updateProductAmount({ productId: product._id, amount: product.amount + 1 });
  }

  function handleProductDecrement(product) {
    updateProductAmount({ productId: product._id, amount: product.amount - 1 });
  }

  function handleRemoveProduct(productId) {
    removeProduct(productId);
  }
  function handleCreateOrder() {
    
    const Books = cart.map(books => {
      return (
        {
          id: books._id,
          name: books.name,
          price: books.price,
          image: books.image,
          amount: books.amount,
        }
      )
    })
    
    const orderData = {
      user: userInfo.email,
      Books,
    }
    requestOrder(orderData, signOut)
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
          {cartFormatted.map((product) => (
            <tr data-testid="product" key={product._id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.name}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    data-testid="decrement-product"
                    disabled={product.amount <= 1}
                    onClick={() => handleProductDecrement(product)}
                  >
                    <RemoveIcon />
                  </button>
                  <input
                    type="text"
                    data-testid="product-amount"
                    readOnly
                    value={product.amount}
                  />
                  <button
                    type="button"
                    data-testid="increment-product"
                    onClick={() => handleProductIncrement(product)}
                  >
                    <AddIcon />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subTotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  data-testid="remove-product"
                  onClick={() => handleRemoveProduct(product._id)}
                >
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        {isSigned
          ? <button type="button" onClick={handleCreateOrder}>Finalizar Compra</button>
          : <button type="button" onClick={() => navigate(to)}>{message}</button>
        }
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
