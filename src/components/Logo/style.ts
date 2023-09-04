import styled from '@emotion/styled';

export const LogoContainer = styled.div`
  width: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  &.circle {
    border-radius: 50%;
    overflow: hidden;
  }

  &.small img {

    width: 2rem;
  }

  &.medium img {
    width: 8rem;

  }
  &.large img {
    width: 50rem;
    height: max-content;
  }

  & img {
    width: 100%;
  }
`;
