import styled from '@emotion/styled';

export const LogoContainer = styled.div`
  border-radius: 50%;
  width: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  &.small img {
    width: 2rem;
  }

  &.sm img {
    width: 4rem;
  }

  &.medium img {
    width: 8rem;
  }
  &.large img {
    width: 20rem;
  }

  & img {
    width: 100%;
  }
`;
