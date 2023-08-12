import { css } from '@emotion/react'
import emotionReset from 'emotion-reset';

export const globalStyle = css`
  ${emotionReset}
  *{
    margin: 0;
    padding: 0;
  }
  body {
    box-sizing: border-box;
  }
`
