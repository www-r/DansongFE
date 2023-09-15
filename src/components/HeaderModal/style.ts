import styled from '@emotion/styled';
import { CenterContainer } from '../../styles/global';

export const ModalContainer = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.backgroundColor.white};
  position: fixed;
  z-index: 4;
  border-radius: 0 0 2rem 2rem;
  box-shadow: ${({ theme }) => theme.border.boxShadow};
`;

export const MenuContainer = styled(CenterContainer)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Menu = styled.nav`
  margin-bottom: 2rem;
  width: 100%;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor.black};
  transition: all 0.1s linear;
`;
