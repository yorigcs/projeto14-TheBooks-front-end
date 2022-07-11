import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  padding: 1.5rem;

  background-color: #444;
`;

export const Books = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 1.5rem;

  margin-top: 1rem;
`;

export const Book = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  img {
    width: 10rem;
  }
`;

export const Price = styled.span`
  margin: 0.25rem 0;
`;
