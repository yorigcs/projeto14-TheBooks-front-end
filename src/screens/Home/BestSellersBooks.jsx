import { useEffect, useState } from 'react';

import { ThreeDots } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

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
  const [numBooks, setNumBooks] = useState(4);

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
            <Link to={`/book/${book._id}`} key={book._id}>
              <Book>
                <img src={book.image} alt={book.name} />
                <h3>{book.name}</h3>
              </Book>
            </Link>
          ))
        )}
      </BooksContainer>

      <ButtonLoadMore onClick={handleLoadMoreBooks} />
    </Container>
  );
}
