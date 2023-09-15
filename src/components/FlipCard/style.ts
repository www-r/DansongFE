import styled from '@emotion/styled';

export const FlipCard = styled.div`
  width: 35rem;
  height: 50rem;
  background-color: transparent;
  perspective: 1000px;
  .FlipCardInner {
    transition: transform 0.8s;
    transform-style: preserve-3d;
    position: relative;
    /* display: flex;
    justify-content: center; */
  }
  &:hover .FlipCardInner {
    transform: rotateY(180deg);
  }
  @media (max-width: ${props => props.theme.viewport.tablet}) {
    width: 27rem;
  }
`;
