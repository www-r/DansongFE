import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};
  min-width: ${({ theme }) => theme.viewport.tablet};
  height: 7vh;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 10rem;
`;

export const Menu = styled.li`
  font-size: 1.4rem;
  color: #f5f5f7;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.white};
  }
`;
