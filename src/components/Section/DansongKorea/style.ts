import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const Section = styled.section``;

export const VideoSection = styled.section`
  height: calc(60vh - 6rem);
  margin-top: 6rem;
  background-image: linear-gradient(to bottom, ${theme.colors.navy1}, ${theme.colors.navy2});

  @media (max-width: ${theme.viewport.tablet}) {
    display: none;
  }
`;

export const TextSection = styled.section`
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${theme.viewport.tablet}) {
    height: 100vh;
  }
`;

export const StudioSection = styled.section`
  background: url('/images/studio.jpg') no-repeat;
  background-size: cover;
  background-attachment: fixed;
  filter: grayscale(100%);
  height: 200vh;
  padding-bottom: 10vh;
`;

export const LogoSection = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor.black};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
