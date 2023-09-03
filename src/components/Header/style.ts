import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  background-color: ${({ theme }) => theme.backgroundColor.header};
  /* min-width: ${({ theme }) => theme.viewport.tablet}; */
  height: 8rem;
  transition: background-color linear 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor.black};
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 3.6rem;
  display: flex;
  height: 100%;
  align-items: center;
`;

export const MenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10rem;

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
