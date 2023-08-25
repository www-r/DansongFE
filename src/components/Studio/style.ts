import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { CenterContainer } from '../../styles/global';

export const Box = styled(motion.div)`
  width: 90%;
`;

export const Overlay = styled(motion.div)`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  margin: 20rem 0;
`;

export const TextContainer = styled(CenterContainer)`
  display: flex;
  flex-direction: column;
  text-align: center;
  @media screen and (max-width: ${({ theme }) => theme.viewport.mobile}) {
  }
`;

export const TextBox = styled.div`
  width: 70%;
  padding: 10rem 0;
  margin: 0 auto;
`;
