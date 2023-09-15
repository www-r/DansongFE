import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const Section = styled.section``;

export const VideoSection = styled.section`
  position: relative;
  height: 100%;
  background: ${({ theme }) => theme.backgroundColor.white};
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
`;
