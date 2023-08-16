import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const Section = styled.section``;

export const Wrapper = styled.section`
  background-image: linear-gradient(to bottom, ${theme.colors.navy1}, ${theme.colors.navy2});
  display: flex;
  justify-content: center;
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: ${theme.width.maxWidth};
  @media (max-width: 768px) {
    display: block;
  }
`;
