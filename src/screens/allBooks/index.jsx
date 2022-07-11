import { useState, useEffect } from 'react';
import axiosI from '../../services/axios';
import TopBar from '../../shared/header';

import { Link } from 'react-router-dom';

import { formatPrice } from '../../util/format';

import { Container, Header, Books, Book, Price } from './styles';

export default function AllBooks() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    axiosI.get(`/allBooks`).then(({ data }) => {
      const cartFormatted = data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setAllBooks(cartFormatted);
    });
  }, []);

  return (
    <>
      <TopBar />

      <Container>
        <Header>
          <h2>filtro</h2>
        </Header>

        <Books>
          {allBooks.map((book) => (
            <Link key={book._id} to={`/book/${book._id}`}>
              <Book>
                <img src={book.image} alt={book.name} />
                <Price>{book.priceFormatted}</Price>
                <span>{book.name}</span>
              </Book>
            </Link>
          ))}
        </Books>
      </Container>
    </>
  );
}
