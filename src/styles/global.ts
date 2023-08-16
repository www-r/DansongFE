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
  }

  body {
    width: 100%;
  }
`;

export const Center = styled.div`

  margin: auto;
  padding: 0 7.4rem;
`;
