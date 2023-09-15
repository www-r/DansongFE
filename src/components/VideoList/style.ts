import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { CenterContainer } from '../../styles/global';

export const Box = styled(motion.div)``;
export const LottieContainer = styled.div`
  width: 6rem;
  height: 6rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1rem;
`;

export const VidoContainer = styled(CenterContainer)`
  display: flex;
  align-items: center;
  width: 50%;
  padding: 2rem 0 6rem 0;
`;

export const Video = styled.video`
  border-radius: 2rem;
  padding: 1rem;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.5); */
  opacity: 0.12;
  width: 100%;

  & img {
    padding: 1rem;
    border-radius: 2rem;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  position: sticky;
  top: 6rem;
  left: 0;
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor.white})

  @media (max-width: ${({ theme }) => theme.viewport.tablet}) {
    display: none;
  }
`;
