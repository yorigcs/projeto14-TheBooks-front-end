import { useEffect, useState } from 'react';

import { ThreeDots } from 'react-loader-spinner';

import axiosI from '../../services/axios';

import ButtonLoadMore from '../../shared/buttons/ButtonLoadMore';

import {
  Container,
  Heading,
  BooksContainer,
  Book,
} from '../../styles/bestSellersBooks';

export function BestSellersBooks() {
  const [bestSellers, setBestSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numBooks, setNumBooks] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    axiosI
      .get(`/bestSellersBooks?numBooks=${numBooks}`)
      .then(({ data }) => {
        setBestSellers(data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [numBooks]);

  function handleLoadMoreBooks() {
    setNumBooks((books) => books + 4);
  }

  return (
    <Container>
      <Heading>Mais vendidos</Heading>

      <BooksContainer>
        {isLoading ? (
          <ThreeDots width="4em" height="4em" color="white" />
        ) : (
          bestSellers?.map((book) => (
            <Book key={book._id}>
              <img src={book.image} alt={book.name} />
              <h3>Quantidade venda: {book.soldNumber}</h3>
            </Book>
          ))
        )}
      </BooksContainer>

      <ButtonLoadMore onClick={handleLoadMoreBooks} />
    </Container>
  );
}
