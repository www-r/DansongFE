import styled from '@emotion/styled';
import { CenterContainer } from '../../styles/global';

export const Wrapper = styled.div`
  width: 70%;
  padding: 10rem 0;
  margin: 0 auto;
`;

export const Container = styled(CenterContainer)`
  width: 90%;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1rem;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.logoContainer};
  margin-bottom: 6rem;
  position: relative;
  gap: 3rem;

  @media screen and (max-width: ${({ theme }) => theme.viewport.mobile}) {
    min-width: 38rem;
  }
`;

export const MiddleContainer = styled(CenterContainer)`
  @media screen and (max-width: ${({ theme }) => theme.viewport.mobile}) {
    min-width: 6.8rem;
  }
`;

export const Text = styled.div`
  text-align: center;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.grey2};

  @media screen and (max-width: ${({ theme }) => theme.viewport.mobile}) {
    font-size: 0.9rem;
  }
`;

export const LineContainer = styled.div`
  margin: 1.5rem auto;

  & > div {
    height: 2rem;
    width: 50%;
    border: 2px dotted ${({ theme }) => theme.colors.grey2};
    border-bottom: none;
    border-left: none;
    border-top: none;
  }

  & div + div {
    width: 28rem;
    height: 2rem;
    margin: 0 auto;
    border: 2px dotted ${({ theme }) => theme.colors.grey2};
    border-bottom: none;
  }
`;
