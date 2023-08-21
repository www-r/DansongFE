import styled from '@emotion/styled';
import { motion } from 'framer-motion';
export const Box = styled(motion.div)``;
export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
`;
export const ImgContainer = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  & img {
    object-fit: cover;
    width: 100%;
  }
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
