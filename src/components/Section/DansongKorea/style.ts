import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const Section = styled.section``;

export const VideoSection = styled.section`
  height: calc(80vh - 6rem);
  margin-top: 6rem;
  background-image: ${({ theme }) => theme.backgroundColor.black};

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
`;

export const LogoSection = styled.section`
  width: 45rem;
  padding: 10rem 0 20rem 0;
  margin: 0 auto;
`;
