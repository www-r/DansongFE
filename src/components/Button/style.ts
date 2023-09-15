import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: #fff;
  border: 0.2rem solid black;
  border-radius: 8rem;
  padding: 2rem;
  width: 40rem;
  font-size: 3rem;
  @media (min-width: ${({ theme }) => theme.viewport.desktop}) {
    font-size: 1.7rem;
  }
`;
