import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { CenterContainer } from '../../styles/global';

export const Box = styled(motion.div)`
  width: 90%;
`;

export const Overlay = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const TextContainer = styled(CenterContainer)`
  padding: 10rem 0;
  flex-direction: column;
`;

export const TextBox = styled.div`
  width: 70%;
  padding: 10rem 0;
  margin: 0 auto;
`;
