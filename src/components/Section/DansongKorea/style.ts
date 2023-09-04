import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const Section = styled.section``;

export const VideoSection = styled.section`
  height: calc(60vh - 6rem);
  margin-top: 6rem;
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
`;

export const StudioSection = styled.section`
  width: 100%;
  background: url('/images/studio.jpg') no-repeat;
  background-size: cover;
  background-attachment: fixed;
  filter: grayscale(100%);
`;

export const LogoSection = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.navy1};
`;
