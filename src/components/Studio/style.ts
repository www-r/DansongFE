import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Box = styled(motion.div)`
  width: 90%;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const TextContainer = styled.div`
  position: sticky;
  top: 0;
  text-align: center;
  height: fit-content;
  @media screen and (max-width: ${({ theme }) => theme.viewport.mobile}) {
    font-size: 15vw;
  }
`;
export const Overlay = styled(motion.div)`
  position: fixed;
  bottom: 0;
  z-index: 1;
  height: 110vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
`;
export const TextBox = styled.div`
  padding: 0 10vw;
`;
