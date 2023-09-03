import styled from '@emotion/styled';

export const FlipCard = styled.div`
  height: 30rem;
  background-color: transparent;
  perspective: 1000px;
  .FlipCardInner {
    transition: transform 0.8s;
    transform-style: preserve-3d;
    position: relative;
  }
  &:hover .FlipCardInner {
    transform: rotateY(180deg);
  }
`;
