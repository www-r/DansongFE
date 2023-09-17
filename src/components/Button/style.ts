import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: #fff;
  border: 0.2rem solid black;
  border-radius: 8rem;
  padding: 2rem;
  width: 30rem;
  font-size: 3rem;
  @media (min-width: ${({ theme }) => theme.viewport.desktop}) {
    font-size: 1.7rem;
    width: 34rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor.yellow};
    border-color: ${({ theme }) => theme.backgroundColor.yellow};
    span {
      color: ${({ theme }) => theme.textColor.white};
    }
  }
`;
