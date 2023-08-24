import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';
import { CenterContainer } from '../../../styles/global';

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

export const TextContainer = styled(CenterContainer)`
  flex-direction: column;
`;

export const LogoSection = styled.section``;

export const LogoContainer = styled.div``;
