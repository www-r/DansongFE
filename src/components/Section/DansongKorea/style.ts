import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const Section = styled.section``;

export const VideoSection = styled.section`
  background-image: linear-gradient(to bottom, ${theme.colors.navy1}, ${theme.colors.navy2});
  display: flex;
  justify-content: center;
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: ${theme.width.maxWidth};
  @media (max-width: ${theme.viewport.tablet}) {
    display: block;
  }
`;

export const TextSection = styled.section`
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div``;

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
