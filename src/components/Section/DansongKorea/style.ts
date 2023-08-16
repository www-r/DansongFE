import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const Section = styled.section``;

export const VideoWrapper = styled.section`
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

export const TextWrapper = styled.section`
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  & > h2 {
    font-size: 4.8rem;
    font-weight: 900;
    margin-bottom: 12px;
  }

  & > p {
    font-size: 2.4rem;
    display: flex;
    justify-content: center;
  }
`;
