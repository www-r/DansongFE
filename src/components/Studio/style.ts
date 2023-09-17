import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const TextContainer = styled.div`
  margin-top: 20rem;
  position: sticky;
  top: 0;
  text-align: center;
  height: fit-content;
  padding: 0 10vw;
  @media screen and (max-width: ${({ theme }) => theme.viewport.desktop}) {
    font-size: 15vw;
    position: static;
  }
`;
export const Overlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  z-index: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  @media screen and (max-width: ${({ theme }) => theme.viewport.desktop}) {
    /* position: static; */
    height: 100vh;
  }
`;
export const TextBox = styled.div`
  padding: 10vw 10vw 0;
`;
