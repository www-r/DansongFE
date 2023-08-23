import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const Section = styled.section``;

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
  position: relative;

  @media (max-width: ${theme.viewport.tablet}) {
    height: 40vh;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LogoSection = styled.section`
  position: relative;
  background: url('../../../public/images/studio1.webp') no-repeat;
  background-size: cover;
  height: calc(100vh - 8rem);
  filter: grayscale(100%);
`;

export const LogoContainer = styled.div``;
