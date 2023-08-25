import styled from '@emotion/styled';
import { motion } from 'framer-motion';

type Props = {
  bgColor?: string;
};

export const Container = styled(motion.div)<Props>`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ bgColor }) => bgColor};
  position: relative;

  &.small {
    min-width: 7rem;
    min-height: 7rem;
  }
  &.medium {
    min-width: 12rem;
    min-height: 12rem;
  }
  &.large {
    min-width: 18rem;
    min-height: 18rem;
  }

  & > div {
    width: 100%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
