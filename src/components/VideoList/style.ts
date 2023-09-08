import styled from '@emotion/styled';
import { motion } from 'framer-motion';
export const Box = styled(motion.div)``;
export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
`;
export const ImgContainer = styled.li`
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

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  height: 100%;
  position: relative;
  background-color: #000;
`;
/* & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @media (max-width: ${theme.viewport.tablet}) {
    display: block;
    height: 50%;
  }
  @media (max-width: ${theme.viewport.mobile}) {
    & img {
      min-width: ${theme.viewport.mobile};
    }
  } */
