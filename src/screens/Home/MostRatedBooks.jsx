import { useEffect, useState } from 'react';

import { ThreeDots } from 'react-loader-spinner';

import axiosI from '../../services/axios';

import ButtonLoadMore from '../../shared/buttons/ButtonLoadMore';

import {
  Container,
  Heading,
  BooksContainer,
  Book,
} from '../../styles/mostRatedBooks';

export function MostRatedBooks() {
  const [mostRatedBooks, setMostRatedBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numBooks, setNumBooks] = useState(2);

  useEffect(() => {
    setIsLoading(true);
    axiosI
      .get(`/mostRatedBooks?numBooks=${numBooks}`)
      .then(({ data }) => {
        setMostRatedBooks(data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [numBooks]);

  function handleLoadMoreBooks() {
    setNumBooks((mostRatedBooks) => mostRatedBooks + 4);
  }

  return (
    <Container>
      <Heading>Mais bem avaliados</Heading>

      <BooksContainer>
        {isLoading ? (
          <ThreeDots width="4em" height="4em" color="white" />
        ) : (
          mostRatedBooks?.map((book) => (
            <Book key={book._id}>
              <img src={book.image} alt={book.name} />
            </Book>
          ))
        )}
      </BooksContainer>

      <ButtonLoadMore onClick={handleLoadMoreBooks} />
    </Container>
  );
}
