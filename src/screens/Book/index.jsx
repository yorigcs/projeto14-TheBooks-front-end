import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import axiosI from '../../services/axios';
import TopBar from '../../shared/header';

import {
  Container,
  Heading,
  Display,
  Image,
  SummaryWrapper,
  ButtonWrapper,
  Button,
  Info,
  Summary,
} from './styles';

export default function Book() {
  const [book, setBook] = useState({});
  const [bookSummary, setBookSummary] = useState('');
  const [isSummary, setIsSummary] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    axiosI.get(`/book/${id}`).then(({ data }) => {
      setBook(data);
      setBookSummary(data.summary);
    });
  }, []);

  function handleAddToCart() {
    const booksCart = localStorage.getItem('theBooksCart');
    if (booksCart) {
      const booksCartParsed = JSON.parse(booksCart);
      const booksArray = [...booksCartParsed, book];
      const booksArrayJSON = JSON.stringify(booksArray);
      localStorage.setItem('theBooksCart', booksArrayJSON);
      return;
    }

    const booksArray = [book];
    const booksArrayJSON = JSON.stringify(booksArray);
    localStorage.setItem('theBooksCart', booksArrayJSON);
  }

  return (
    <>
      <TopBar />
      <Container>
        <Heading>{book.name}</Heading>
        <Display>
          <Image src={book.image} />
          <SummaryWrapper>
            <ButtonWrapper>
              <Button
                onClick={() => setIsSummary(false)}
                isSelected={!isSummary}
              >
                Info
              </Button>
              <Button onClick={() => setIsSummary(true)} isSelected={isSummary}>
                Summary
              </Button>
            </ButtonWrapper>
            {isSummary ? (
              <Summary>
                <p>Sumário: {book.summary}</p>
              </Summary>
            ) : (
              <Info>
                <p>Autor: {book.author}</p>
                <p>Categoria: {book.category}</p>
                <p>Preço: {book.price}</p>
                <p>Lançamento: {book.releaseDate}</p>
                <p>Avaliação: {book.rate}</p>
              </Info>
            )}

            <ButtonWrapper>
              <Button onClick={handleAddToCart}>Adicionar ao carrinho</Button>
            </ButtonWrapper>
          </SummaryWrapper>
        </Display>
      </Container>
    </>
  );
}
