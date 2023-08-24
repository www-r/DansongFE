import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { CenterContainer } from '../../styles/global';

export const Box = styled(motion.div)`
  width: 90%;
`;

export const ImgContainer = styled(motion.div)`
  width: 100%;
  height: 200vh;
  background: url('../../../public/images/studio1.webp') no-repeat;
  background-size: cover;
  background-attachment: fixed;
  filter: grayscale(100%);
`;

export const DescContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Wrapper = styled.div``;

export const TextContainer = styled(CenterContainer)`
  padding: 10rem 0;
  flex-direction: column;
`;
