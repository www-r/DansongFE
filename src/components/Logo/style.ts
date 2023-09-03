import styled from '@emotion/styled';

export const LogoContainer = styled.div`
  border-radius: 50%;
  width: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  &.small img {
    width: 3.6rem;
  }

  &.medium img {
    width: 15rem;
  }
  &.large img {
    width: 60rem;
  }

  & img {
    width: 100%;
  }
`;
