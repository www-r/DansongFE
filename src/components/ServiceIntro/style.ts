import styled from '@emotion/styled';
import { CenterContainer } from '../../styles/global';

export const Wrapper = styled.section`
  position: relative;
  padding: 10rem 0 20rem 0;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgroundColor.white};
  opacity: 0.8;
  z-index: 1;
`;

export const Container = styled.div`
  width: max-content;
  min-width: 70rem;
  box-sizing: border-box;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.viewport.tablet}) {
    min-width: 30rem;
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
    width: 80%;
    top: 2rem;
    left: 10%;
    height: 2rem;
    border: 2px dotted ${({ theme }) => theme.colors.black};
    border-bottom: none;
  }
`;
