import styled from 'styled-components';

export const Container = styled.div`
  background-color: #8eb6eb;

  padding: 1rem 1.25rem;
  color: #fff;

  min-height: 100vh;
`;

export const Heading = styled.h2``;

export const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Image = styled.img``;

export const SummaryWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Button = styled.button`
  background-color: ${({ isSelected }) => (isSelected ? '#fff' : '#000')};
  color: ${({ isSelected }) => (isSelected ? '#000' : '#fff')};
  border: none;
  border: 1px solid transparent;

  padding: 0.5rem 0.75rem;

  border-radius: 20px;

  cursor: pointer;
`;

export const Info = styled.div`
  background-color: #2a2e31c2;
  border-radius: 10px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export const Summary = styled.div`
  background-color: #2a2e31c2;
  border-radius: 10px;
  padding: 1rem;
`;
