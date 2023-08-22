import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const Section = styled.section`
`;

export const VideoSection = styled.section`
  height: 60vh;
  margin-top: 8rem;
  background-image: linear-gradient(to bottom, ${theme.colors.navy1}, ${theme.colors.navy2});

  /* @media (max-width: ${theme.viewport.tablet}) {
    height: 60vh;
  } */
`;

export const VideoContainer = styled.ul`
  display: flex;
  justify-content: center;
  height: 100%;
  position: relative;
`;

export const TextSection = styled.section`
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.viewport.tablet}) {
    height: 40vh;
  }
`;

export const TextContainer = styled.div`
  background-color: red;

  /* @media (max-width: ${theme.viewport.mobile}) {
    min-width: ${theme.viewport.mobile};
    & span {
      font-size: 3.6rem;
    }
    & span + span {
      font-size: 1.8rem;
    }
  } */
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
