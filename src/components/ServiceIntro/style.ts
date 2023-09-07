import styled from '@emotion/styled';
import { CenterContainer } from '../../styles/global';

export const Container = styled(CenterContainer)`
  width: 90%;
  margin: 0 auto;
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
  /* @media screen and (max-width: ${({ theme }) => theme.viewport.mobile}) {
    min-width: 6.8rem;
  } */
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
  margin: 2rem 0;
  position: relative;
  height: 4rem;

  & > div {
    position: absolute;
    height: 2rem;
    width: 50%;
    top: 0;
    left: 0;

    border: 2px dotted ${({ theme }) => theme.colors.black};
    border-bottom: none;
    border-left: none;
    border-top: none;
  }

  & div + div {
    position: absolute;
    width: 50%;
    top: 2rem;
    left: 25%;
    height: 2rem;
    border: 2px dotted ${({ theme }) => theme.colors.black};
    border-bottom: none;
  }
`;
