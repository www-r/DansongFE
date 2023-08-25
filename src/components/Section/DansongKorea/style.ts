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

export const StudioSection = styled.section`
  width: 100%;
  background: url('../../../public/images/studio1.webp') no-repeat;
  background-size: cover;
  background-attachment: fixed;
  filter: grayscale(100%);
`;

export const LogoSection = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.navy1};
`;
