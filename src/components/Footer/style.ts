import styled from '@emotion/styled';

export const Footer = styled.footer`
  display: flex;
  gap: 5rem;
  background-color: ${({ theme }) => theme.backgroundColor.footer};
  color: ${({ theme }) => theme.textColor.footer};
  font-size: 1.3rem;
  padding: 2rem 10vw;
  width: 100%;
  line-height: 1.6;
  flex-wrap: wrap;
  .footer--logo {
    @media (max-width: ${({ theme }) => theme.viewport.desktop}) {
      display: none;
    }
  }
  .text--top {
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 5rem;
  }
  .text--bottom {
    color: ${({ theme }) => theme.textColor.grey};
  }
  .flexwrap {
    display: flex;
    flex-wrap: wrap;
  }
`;
