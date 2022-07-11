import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';

import { formatPrice } from '../../util/format';

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
  const { addProduct } = useCart();

  const [book, setBook] = useState({});
  const [isSummary, setIsSummary] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    axiosI.get(`/book/${id}`).then(({ data }) => {
      const booksFormatted = {
        ...data,
        priceFormatted: formatPrice(data.price),
      };

      setBook(booksFormatted);
    });
  }, []);

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
                <p>Preço: {book.priceFormatted}</p>
                <p>Lançamento: {book.releaseDate}</p>
                <p>Avaliação: {book.rate}</p>
              </Info>
            )}

            <ButtonWrapper>
              <Button onClick={() => addProduct(book._id)}>
                Adicionar ao carrinho
              </Button>
            </ButtonWrapper>
          </SummaryWrapper>
        </Display>
      </Container>
    </>
  );
}
