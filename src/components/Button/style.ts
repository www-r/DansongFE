import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.4rem;
  word-break: keep-all;
  border-radius: 98rem;
  background-color: ${({ theme }) => theme.backgroundColor.white};
  color: ${({ theme }) => theme.backgroundColor.black};
  &.scroll {
    /* color: white; */
  }

  &.link {
    /* color: white; */
  }
`;
