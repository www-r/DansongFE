import styled from '@emotion/styled';

export const ContactIcon = styled.div`
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor.white};
  border-radius: 50%;
  padding: 2rem;
  &:hover {
    cursor: pointer;
  }
`;
