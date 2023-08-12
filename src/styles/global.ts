import { css } from '@emotion/react'
import reset from 'styled-reset'

export const globalStyle = css`
  ${reset}
  *{
    margin: 0;
    padding: 0;
  }
  body {
    box-sizing: border-box;
  }
`
