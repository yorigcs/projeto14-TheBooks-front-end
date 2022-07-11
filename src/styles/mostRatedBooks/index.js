import styled from 'styled-components';

export const Container = styled.div`
  background-color: #8eb6eb;

  padding: 1rem 1.25rem;

  margin-top: 0.25rem;
`;

export const Heading = styled.h2``;

export const BooksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1.5rem 0;
  justify-content: center;
  margin-top: 0.25rem;
`;

export const Book = styled.div`
  cursor: pointer;

  img {
    width: 8rem;
    height: 10.25rem;
  }
`;
