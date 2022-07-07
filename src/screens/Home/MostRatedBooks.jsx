import { useEffect, useState } from 'react';

import { ThreeDots } from 'react-loader-spinner';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles/swiper.css';

import axiosI from '../../services/axios';

// import ButtonLoadMore from '../../shared/buttons/ButtonLoadMore';

import {
  Container,
  Heading,
  BooksContainer,
  Book,
} from '../../styles/mostRatedBooks';

export function MostRatedBooks() {
  const [mostRatedBooks, setMostRatedBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numBooks, setNumBooks] = useState(6);

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
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {mostRatedBooks?.map((book) => (
              <SwiperSlide key={book._id}>
                <Book>
                  <img src={book.image} alt={book.name} />
                  <h3>Avaliação: {book.rate}</h3>
                </Book>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </BooksContainer>

      {/* <ButtonLoadMore onClick={handleLoadMoreBooks} /> */}
    </Container>
  );
}
