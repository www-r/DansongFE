import styled from '@emotion/styled';
import { CenterContainer } from '../../styles/global';

export const Header = styled.header`
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  width: 100%;
  max-width: 1740px;
  background-color: ${({ theme }) => theme.colors.black};
  height: 6rem;
  transition: background-color linear 0.2s;
`;

export const Container = styled(CenterContainer)`
  width: 100%;
  height: 100%;
  padding: 0 10vw;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.viewport.mobile}) {
    padding: 0;
  }
`;

export const MenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 7%;

  @media screen and (max-width: ${({ theme }) => theme.viewport.mobile}) {
    display: none;
  }
`;

export const Menu = styled.li`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textColor.white};
  transition: all 0.1s linear;
  &:hover {
    font-size: 1.55rem;
    text-decoration: underline;
  }
`;

export const LogoContainer = styled.div`
  margin: 2rem;
`;

export const IconContainer = styled.div`
  padding: 2rem;
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.viewport.mobile}) {
    display: block;
  }
`;
