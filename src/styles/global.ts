import { css } from '@emotion/react';
import styled from '@emotion/styled';
import emotionReset from 'emotion-reset';

export const globalStyle = css`
  ${emotionReset}

  * {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    word-break: keep-all;
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
  }

  button {
    outline: none;
    border: none;
    /* cursor: pointer; */
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }
`;

type CenterContainerProps = {
  direction?: 'column' | 'row';
};

export const CenterContainer = styled.div<CenterContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) => direction || 'row'};
`;
