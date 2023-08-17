import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const Section = styled.section``;

export const VideoSection = styled.section`
  height: 63vh;
  width: 100%;
  margin-top: 7vh;
  background-image: linear-gradient(to bottom, ${theme.colors.navy1}, ${theme.colors.navy2});

  @media (max-width: ${theme.viewport.tablet}) {
    height: 63vh;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${theme.viewport.tablet}) {
    display: block;
    height: 50%;
  }

  @media (max-width: ${theme.viewport.mobile}) {
    & img {
      min-width: ${theme.viewport.mobile};
    }
  }
`;

export const TextSection = styled.section`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.viewport.tablet}) {
    height: 30vh;
  }
`;

export const TextContainer = styled.div`
  @media (max-width: ${theme.viewport.mobile}) {
    min-width: ${theme.viewport.mobile};
    & span {
      font-size: 3.6rem;
    }
    & span + span {
      font-size: 1.8rem;
    }
  }
`;

export const LogoSection = styled.section`
  background-image: linear-gradient(to bottom, ${theme.colors.navy1}, ${theme.colors.navy2});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  min-width: ${theme.width.maxWidth};
  height: 20rem;
`;
